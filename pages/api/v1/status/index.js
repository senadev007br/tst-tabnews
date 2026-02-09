function status(request, response) {
  response.status(200).json({ chave: "valor - teste de api e scentuação" });
}

export default status;
