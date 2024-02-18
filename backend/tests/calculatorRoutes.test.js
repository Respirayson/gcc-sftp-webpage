import request from "supertest";
import app from "../index.js";

describe("POST /api/v1/calculator/add", () => {
  it("should add two numbers", async () => {
    const res = await request(app)
      .post("/api/v1/calculator/add")
      .send("operand1=123545&operand2=12312");
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(135857);
  });

  it("should use 0 for blank operand 2", async () => {
    const res = await request(app)
      .post("/api/v1/calculator/add")
      .send("operand1=1245&operand2=");
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(1245);
  });
});

describe("POST /api/v1/calculator/subtract", () => {
  it("should subtract two numbers", async () => {
    const res = await request(app)
      .post("/api/v1/calculator/subtract")
      .send("operand1=123545&operand2=12312");
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(111233);
  });

  it("should use 0 for blank operand 1", async () => {
    const res = await request(app)
      .post("/api/v1/calculator/subtract")
      .send("operand1=&operand2=123123");
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(-123123);
  });
  
});
