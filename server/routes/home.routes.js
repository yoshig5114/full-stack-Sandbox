router.get("/", (request, response) => {
    response.write("<H1> Home for SuperHero App </H1>");
    response.status(200);
    response.end();
});