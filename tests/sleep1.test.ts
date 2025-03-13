import { sleep } from "../src/sleep";

describe("Teste de espera - Grupo 2", () => {
  it("deve esperar 35 a 40 segundos", async () => {
    const delay = Math.floor(Math.random() * 6) + 35; // 35 a 40 seg
    console.log(`Esperando ${delay} segundos...`);
    await sleep(delay * 1000);
    expect(true).toBe(true);
  }, 45000);
});