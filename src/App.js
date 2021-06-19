import { react, useState, useEffect, createRef } from "react";
import styled from "styled-components";
import { Box, TextField, Button } from "@material-ui/core";
import BussinessCard from "./BusinessCard";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

const FlexCol = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CustomBox = styled(Box)`
  margin-top: 30px;
  margin-bottom: 50px;
`;

const App = () => {
  const title = "명함 생성기 예제";
  const [inputs, setInputs] = useState({
    name: "",
    title: "",
    department: "",
    companyPhone: "",
    fax: "",
    myPhone: "",
    mail: "",
    url: "",
    address: "",
  });
  const [img, setImage] = useState(null);

  const TextFieldStyle = { margin: "10px", width: "40%" };
  const keyObject = {
    name: "이름",
    ctitle: "직함",
    department: "부서",
    companyPhone: "회사 전화",
    fax: "Fax",
    myPhone: "개인 전화",
    mail: "메일",
    url: "홈페이지 url",
    address: "주소",
  };
  const {
    name,
    ctitle,
    department,
    companyPhone,
    fax,
    myPhone,
    mail,
    url,
    address,
  } = inputs;

  useEffect(() => {
    console.log(name, ctitle);
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setInputs({ ...inputs, [name]: value });
  };

  const fileInput = createRef();

  const selectImg = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <FlexCol>
      <Box>
        <h1>{title}</h1>
      </Box>
      <PDFViewer style={{ flex: 1 }}>
        <BussinessCard
          name={name}
          img={img}
          ctitle={ctitle}
          department={department}
          companyPhone={companyPhone}
          fax={fax}
          myPhone={myPhone}
          mail={mail}
          url={url}
          address={address}
        />
      </PDFViewer>
      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={selectImg}
        onClick={(e) => {
          e.target.value = null;
        }}
      />
      {Object.keys(keyObject).map((value, key) => (
        <TextField
          key={key}
          name={value}
          value={inputs.value}
          label={keyObject[value]}
          onChange={onChange}
          variant="outlined"
          style={{ ...TextFieldStyle }}
        />
      ))}
      <CustomBox>
        <PDFDownloadLink
          document={
            <BussinessCard
              name={name}
              img={img}
              ctitle={ctitle}
              department={department}
              companyPhone={companyPhone}
              fax={fax}
              myPhone={myPhone}
              url={url}
              mail={mail}
              address={address}
            />
          }
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </CustomBox>
    </FlexCol>
  );
};

export default App;
