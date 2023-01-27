export default async function (req, res) {

  const response = await fetch(process.env.LCC_ENDPOINT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": process.env.LCC_TOKEN
    },
    body: JSON.stringify({
      question: req.body.question,
      history: req.body.history
    }),
  });

    const data = await response.json();

    res.status(200).json({ result: data })
}