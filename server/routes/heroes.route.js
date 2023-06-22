router.post("/heroes", (req, res) => {
    const responseBody = {
        body: req.body,
        url: req.url,
        method: req.method,
    }
    res.json(responseBody);
    res.end();
})

router.get("/heroes", (req, res) => {
    res.write("<H2> Batman </H2>");
    res.status(200);
    res.end();
})