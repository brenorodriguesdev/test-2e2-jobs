import { sleep } from "../src/sleep";

describe("Teste de espera - Grupo 3", () => {
  it("deve esperar 40 a 45 segundos", async () => {
    const delay = Math.floor(Math.random() * 6) + 40; // 40 a 45 seg
    console.log(`Esperando ${delay} segundos...`);
    await sleep(delay * 1000);
    expect(true).toBe(true);
  }, 50000);
});