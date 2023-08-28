from lxml import etree

# Load the XML document and XML schema
xml_file = "employees.xml"
xsd_file = "employee_schema.xsd"

xml_doc = etree.parse(xml_file)
xml_schema = etree.XMLSchema(file=xsd_file)

# Create an XML schema object
try:
    xml_schema.assertValid(xml_doc)
    print("XML document is valid.")
except etree.DocumentInvalid as e:
    print("XML document is not valid. Validation errors:")
    for error in e.error_log:
        print(f"Line {error.line}, Column {error.column}: {error.message}")