import lxml.etree as ET
import lxml.html as LH

# Function to validate XML against XSD schema
def validate_xml(xml_file, xsd_file):
    try:
        schema = ET.XMLSchema(ET.parse(xsd_file))
        xml_doc = ET.parse(xml_file)
        schema.assertValid(xml_doc)
        return True
    except ET.DocumentInvalid as e:
        print("XML validation failed:")
        print(e)
        return False

# Function to transform XML to HTML using XSLT
def transform_xml_to_html(xml_file, xslt_file):
    xml_doc = ET.parse(xml_file)
    xslt = ET.parse(xslt_file)
    transform = ET.XSLT(xslt)
    html_doc = transform(xml_doc)
    return html_doc

# Main function
def main():
    # File paths
    xml_file = 'employee_data.xml'
    xsd_file = 'employee_schema.xsd'
    xslt_file = 'employee_transform.xsl'
    
    # Validate XML against XSD schema
    if not validate_xml(xml_file, xsd_file):
        return
    
    # Transform XML to HTML
    html_doc = transform_xml_to_html(xml_file, xslt_file)
    
    # Write HTML to an output file
    with open('employee_data.html', 'wb') as output_file:
        output_file.write(LH.tostring(html_doc, pretty_print=True, encoding='utf-8'))

if __name__ == '__main__':
    main()
