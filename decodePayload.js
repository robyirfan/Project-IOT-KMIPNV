// Decoce payload at LoRaWAN

function Decoder(bytes) {
  // Pastikan panjang bytes sesuai dengan payload yang Anda kirimkan
  if (bytes.length !== 6) {
    return {
      error: "Invalid payload length",
    };
  }

  // Baca data suhu dan kelembaban udara dari bytes yang diterima
  var temperatureInt = (bytes[0] << 8) | bytes[1];
  var humidityInt = (bytes[2] << 8) | bytes[3];

  // Baca data kelembaban tanah dari bytes yang diterima
  var int_data_hujan = (bytes[4] << 8) | bytes[5];

  // Konversi data suhu dan kelembaban udara ke float (dengan dua desimal)
  var temperature = temperatureInt / 100.0;
  var humidity = humidityInt / 100.0;

  // Kembalikan data yang telah didekode dalam bentuk objek JSON
  return {
    temperature: temperature,
    humidity: humidity,
    int_data_hujan: int_data_hujan,
  };
}