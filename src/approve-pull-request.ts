import axios from "axios";

export const approvePullRequest = async (repo: string, prNumber: number, token: string) => {
  const url = `https://api.github.com/repos/${repo}/pulls/${prNumber}/reviews`;
  await axios.post(
    url,
    { event: "APPROVE", body: "✅ Testes E2E aprovados! PR aprovado automaticamente." },
    { headers: { Authorization: `token ${token}`, Accept: "application/vnd.github.v3+json" } }
  );
};