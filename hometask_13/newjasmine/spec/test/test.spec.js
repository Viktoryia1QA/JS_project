describe(`Test suite`, function() {
  beforeAll(async() => {
      console.log(`BeforeAll: test suite starts`)
  });
  beforeEach(async() => {
      console.log(`BeforeEach: test case starts`)
  });

  afterEach(async() => {
      console.log(`afterEach: test case finished`)
  });
  afterAll(async() => {
      console.log(`afterAll: test suite finished`)
  });

  it(`test case`, async () => {
      expect(5 + 4).toEqual(9);
  });

  it(`second test case`, async() => {
      expect(7 - 3).toEqual(4)
  })

  it(`third test`, async() => {
      expect(true).toEqual(true)
  })

  it(`forth test`, async() => {
      expect(true).not.toEqual(false)
  })

  it("сравнение с использованием ===", async () => {
      expect(1 + 2).toBe(3)
  })

it("сравнение переменных и объектов (включая содержимое)", async () => {
  a = {x: 8, y: 9}
  b = {x: 8, y: 9}
  expect(a).toEqual(b)
  expect(a).not.toBe(b) //отрицание - a не является b
})

it("значение должно быть определено", async () => {
  expect(process.env).toBeDefined();
});

it("значение должно быть не определено", async () => {
  expect(process.notExists).toBeUndefined()
})   

it("значение должно быть null", async () => {
  a = null
  expect(a).toBeNull()
})

it("значение должно быть верно", async () => {
  expect(5 > 0).toBeTruthy()
})

it("значение должно быть не верно", async () => {
  expect(5 < 0).toBeFalsy()
})

it("значение должно быть меньше чем", async () => {
      expect(1 + 2).toBeLessThan(5)
})

it("значение должно быть больше чем", async () => {
  expect(1 + 2).toBeGreaterThan(0)
})

it("значение должно быть близко к числу", async () => {
  expect(1.2345).toBeCloseTo(1.2, 1)
})

it("значение должно соответствовать регулярному выражению", async () => {
  expect("some string").toMatch(/string/)
})

it("значение должно содержать", async () => {
  expect([1, 2, 3]).toContain(2)
  expect("some string").toContain("some")
})
})