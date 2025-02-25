import './App.css';

function App() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // 1. Companies after 1987
  const companiesAfter1987 = companies.filter(company => company.start > 1987);

  // 2. Retail companies with incremented start year
  const retailCompanies = companies
    .filter(company => company.category === "Retail")
    .map(company => ({ ...company, start: company.start + 1 }));

  // 3. Sort companies by end date in ascending order
  const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);

  // 4. Sort ages in descending order
  const sortedAges = [...ages].sort((a, b) => b - a);

  // 5. Sum of all ages using reduce
  const sumOfAges = ages.reduce((sum, age) => sum + age, 0);

  // 6. Function to sum unknown number of arguments
  const sumArgs = (...args) => args.reduce((sum, num) => sum + num, 0);

  // 7. Function to collect arguments into an array
  const collectArgs = (...args) => {
    let result = [];
    args.forEach(arg => {
      if (Array.isArray(arg)) {
        result = result.concat(arg);
      } else {
        result.push(arg);
      }
    });
    return result;
  };

  // 8. Destructuring street property from person object
  const person = { name: "Costas", address: { street: "Lalaland 12" } };
  const { address: { street } } = person;

  // 9. Function that increments a number starting from 0
  const createCounter = () => {
    let count = 0;
    return () => count++;
  };
  const counter = createCounter();

  // 10. Function to parse query parameters into an object
  const parseQueryParams = (url) => {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    return queryString.split('&').reduce((acc, pair) => {
      const [key, value] = pair.split('=');
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
  };

  return (
    <div>
      <h1>Danh sách công ty</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Tên công ty</th>
            <th>Loại</th>
            <th>Bắt đầu</th>
            <th>Kết thúc</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.category}</td>
              <td>{company.start}</td>
              <td>{company.end}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Danh sách công ty sau năm 1987</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Tên công ty</th>
            <th>Loại</th>
            <th>Bắt đầu</th>
            <th>Kết thúc</th>
          </tr>
        </thead>
        <tbody>
          {companiesAfter1987.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.category}</td>
              <td>{company.start}</td>
              <td>{company.end}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Danh sách công ty Retail (start + 1)</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Tên công ty</th>
            <th>Loại</th>
            <th>Bắt đầu</th>
            <th>Kết thúc</th>
          </tr>
        </thead>
        <tbody>
          {retailCompanies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>{company.category}</td>
              <td>{company.start}</td>
              <td>{company.end}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Tuổi sắp xếp giảm dần</h1>
      <p>{sortedAges.join(", ")}</p>

      <h1>Tổng của tất cả các tuổi</h1>
      <p>{sumOfAges}</p>

      <h1>Hàm cộng nhiều tham số</h1>
      <p>Sum of (1, 2, 3, 4, 5): {sumArgs(1, 2, 3, 4, 5)}</p>

      <h1>Hàm thu thập tham số bất kỳ thành mảng</h1>
      <p>{JSON.stringify(collectArgs(1, "hello", [3, 4], 5, [6, 7]))}</p>

      <h1>Street của person</h1>
      <p>{street}</p>

      <h1>Hàm đếm</h1>
      <p>{counter()}, {counter()}, {counter()}</p>

      <h1>Parse query parameters</h1>
      <p>{JSON.stringify(parseQueryParams("https://example.com?name=John&age=30"))}</p>
    </div>
  );
}

export default App;
