// geocode.js
import fs from "fs";

// .env 파일 직접 읽기
const envContent = fs.readFileSync(".env", "utf8");
const envLines = envContent.split("\n");
const envVars = {};

envLines.forEach((line) => {
  const [key, value] = line.split("=");
  if (key && value) {
    envVars[key.trim()] = value.trim();
  }
});

console.log("📁 JSON 파일 읽기 시작...");
let rawData = fs.readFileSync(
  "./public/smokewhere-b0819-default-rtdb-export.json"
);
let data = JSON.parse(rawData);
console.log(`✅ JSON 파일 읽기 완료! 총 ${data.aroundArea.length}개의 데이터`);

async function getCoords(address) {
  const url = `https://maps.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(address)}`;

  const res = await fetch(url, {
    headers: {
      "X-NCP-APIGW-API-KEY-ID": "ohhshbpf1r",
      "X-NCP-APIGW-API-KEY": "b3kdeHwp22Rpq4SJynK28ovXiKZAIk3PgKa3IPyd",
    },
  });

  if (!res.ok) {
    console.error("❌ API 요청 실패", res.status, await res.text());
  }

  const json = await res.json();
  if (json.addresses && json.addresses.length > 0) {
    return {
      lat: parseFloat(json.addresses[0].y),
      lng: parseFloat(json.addresses[0].x),
    };
  } else {
    console.warn(`⚠️ 좌표 없음: ${address}`, json);
  }
  return null;
}

async function main() {
  for (let item of data.aroundArea) {
    if (item.address && (!item.lat || !item.lng)) {
      console.log(`📍 주소 변환중: ${item.address}`);
      const coords = await getCoords(item.address);
      if (coords) {
        item.lat = coords.lat;
        item.lng = coords.lng;
      }
      await new Promise((r) => setTimeout(r, 200)); // rate limit 대응
    }
  }

  fs.writeFileSync(
    "./smokewhere_with_coords.json",
    JSON.stringify(data, null, 2)
  );
  console.log("✅ 위도/경도 추가 완료!");
}

main();
