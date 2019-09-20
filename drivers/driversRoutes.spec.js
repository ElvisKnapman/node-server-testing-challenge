const server = require("../api/server.js");
const request = require("supertest");

describe("GET /", () => {
  it("should return status code 200", async () => {
    const result = await request(server).get("/drivers");

    expect(result.status).toBe(200);
  });

  it("should be an array", async () => {
    const result = await request(server).get("/drivers");
    // destructure body off of result
    const { body } = result;
    expect(Array.isArray(body)).toBe(true);
  });
});

describe("GET /:id", () => {
  it("should return status code 200", async () => {
    const result = await request(server).get("/drivers/1");

    expect(result.status).toBe(200);
  });

  it("should have a id property", async () => {
    const result = await request(server).get("/drivers/1");
    expect(result.body).toHaveProperty("id");
  });
});

describe("POST /", () => {
  it("should return with status code 201", async () => {
    const result = await request(server)
      .post("/drivers")
      .send({ first_name: "Kevin", last_name: "Harvick", car_number: 4 });
    expect(result.status).toBe(201);
  });
  it("should be JSON", async () => {
    const result = await request(server)
      .post("/drivers")
      .send({ first_name: "Kevin", last_name: "Harvick", car_number: 4 });
    expect(result.type).toMatch(/json/i);
  });
});

describe("DELETE /:id", () => {
  it("should return with status code 200", async () => {
    const result = await request(server).delete("/drivers/7");

    expect(result.status).toBe(200);
  });

  it("return 1 if deleted", async () => {
    const result = await request(server).delete("/drivers/9");

    expect(result.body).toBe(1);
  });
});
