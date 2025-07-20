import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    lineHeight: 1.5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    width: '30%',
  },
  value: {
    fontSize: 12,
    width: '70%',
  },
});

const AnalysisReportPDF = ({ analysis }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>AI Analysis Report</Text>
      
      <View style={styles.section}>
        <Text style={styles.title}>Analysis Summary</Text>
        <Text style={styles.text}>
          {analysis?.summary || 'No summary available'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Skin Analysis Results</Text>
        
        {analysis?.skinType && (
          <View style={styles.row}>
            <Text style={styles.label}>Skin Type:</Text>
            <Text style={styles.value}>{analysis.skinType}</Text>
          </View>
        )}
        
        {analysis?.skinConcerns && (
          <View style={styles.row}>
            <Text style={styles.label}>Concerns:</Text>
            <Text style={styles.value}>{analysis.skinConcerns.join(', ')}</Text>
          </View>
        )}
        
        {analysis?.recommendations && (
          <View>
            <Text style={styles.title}>Recommendations</Text>
            {analysis.recommendations.map((rec, index) => (
              <Text key={index} style={styles.text}>• {rec}</Text>
            ))}
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Generated Report</Text>
        <Text style={styles.text}>
          Generated on: {new Date().toLocaleDateString()}
        </Text>
      </View>
    </Page>
  </Document>
);

export default AnalysisReportPDF;