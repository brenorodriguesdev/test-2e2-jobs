import axios from "axios";

const approvePullRequest = async (repo: string, prNumber: number) => {
    const url = `https://api.github.com/repos/${repo}/pulls/${prNumber}/reviews`;
    await axios.post(
      url,
      { event: "APPROVE", body: "✅ Testes E2E aprovados! PR aprovado automaticamente." },
      { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" } }
    );
  };