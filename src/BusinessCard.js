import React from "react";
import {
  Document,
  Page,
  Text,
  Font,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

Font.register({
  family: "SpoqaHanSans",
  src: "https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@01ff0283e4f36e159ffbf744b36e16ef742da6d8/Subset/SpoqaHanSans/SpoqaHanSansLight.ttf",
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  name: {
    margin: 15,
    padding: 20,
    flexDirection: "column",
  },
  info: {
    margin: 15,
    padding: 20,
    flexDirection: "column",
  },
  image: {
    width: 220,
    height: 100,
    marginVertical: 10,
    marginHorizontal: 10,
    marginTop: 30,
    marginRight: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textinfo: {
    fontFamily: "SpoqaHanSans",
    marginTop: 10,
  },
});

// Create Document Component
export const BusinessCard = ({
  name,
  img,
  ctitle,
  department,
  companyPhone,
  fax,
  myPhone,
  mail,
  url,
  address,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.row}>
        <View style={styles.name}>
          <Text style={styles.textinfo}>{name}</Text>
          <Text style={styles.textinfo}>
            {ctitle} | {department}
          </Text>
        </View>
        <Image style={styles.image} src={img !== undefined && img}></Image>
      </View>
      <View style={styles.info}>
        <Text style={styles.textinfo}>
          T {companyPhone} {mail}
        </Text>
        <Text style={styles.textinfo}>
          F {fax} {url}
        </Text>
        <Text style={styles.textinfo}>
          M {myPhone} {address}
        </Text>
      </View>
    </Page>
  </Document>
);

export default BusinessCard;
