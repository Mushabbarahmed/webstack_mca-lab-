<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
    <head>
      <title>Employee Data</title>
    </head>
    <body>
      <h1>Employee Information</h1>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
        <xsl:for-each select="employees/employee">
          <tr>
            <td><xsl:value-of select="id"/></td>
            <td><xsl:value-of select="firstName"/></td>
            <td><xsl:value-of select="lastName"/></td>
            <td><xsl:value-of select="dateOfBirth"/></td>
            <td><xsl:value-of select="gender"/></td>
            <td><xsl:value-of select="position"/></td>
            <td><xsl:value-of select="salary"/></td>
            <td><xsl:value-of select="email"/></td>
            <td><xsl:value-of select="phoneNumber"/></td>
          </tr>
        </xsl:for-each>
      </table>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
