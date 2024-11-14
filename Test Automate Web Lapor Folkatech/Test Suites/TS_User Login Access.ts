<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS_User Login Access</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>8b6ada41-384f-4bde-9eff-7296291315d4</testSuiteGuid>
   <testCaseLink>
      <guid>b3a96485-9881-4133-b112-b0be6b1b9a68</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC_User Login Access/TC1_Positive_Successful Login with Valid Credentials</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>9ddeefca-559b-4b6c-bb9e-42b03282b350</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>1</value>
         </iterationEntity>
         <testDataId>Data Files/TestData_Login</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>9ddeefca-559b-4b6c-bb9e-42b03282b350</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>6c07a8f5-9d8c-4683-90e3-05773d957e9f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>9ddeefca-559b-4b6c-bb9e-42b03282b350</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Passsword</value>
         <variableId>41447a31-8220-4ec2-bd8e-cee84b96c3c4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>9ddeefca-559b-4b6c-bb9e-42b03282b350</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Verify Result</value>
         <variableId>0b88b121-17cb-4f80-8edd-5af032e1e689</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>0dbef9b2-b3c0-41e1-a94f-c27b293fa413</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC_User Login Access/TC2_Negative_Login with Invalid Username</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>10b1c72f-7a6e-4bcc-96c7-d2f425cf496c</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>2</value>
         </iterationEntity>
         <testDataId>Data Files/TestData_Login</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>10b1c72f-7a6e-4bcc-96c7-d2f425cf496c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>6c07a8f5-9d8c-4683-90e3-05773d957e9f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>10b1c72f-7a6e-4bcc-96c7-d2f425cf496c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Passsword</value>
         <variableId>41447a31-8220-4ec2-bd8e-cee84b96c3c4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>10b1c72f-7a6e-4bcc-96c7-d2f425cf496c</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Verify Result</value>
         <variableId>0b88b121-17cb-4f80-8edd-5af032e1e689</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>e2ecb1ec-a541-434d-afce-cdbaf95c139d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TC_User Login Access/TC3_Negative_Login with Invalid Password</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>5c3c832c-131d-4316-b6dc-4f7889ec1da6</id>
         <iterationEntity>
            <iterationType>SPECIFIC</iterationType>
            <value>3</value>
         </iterationEntity>
         <testDataId>Data Files/TestData_Login</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>5c3c832c-131d-4316-b6dc-4f7889ec1da6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>6c07a8f5-9d8c-4683-90e3-05773d957e9f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>5c3c832c-131d-4316-b6dc-4f7889ec1da6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Passsword</value>
         <variableId>41447a31-8220-4ec2-bd8e-cee84b96c3c4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>5c3c832c-131d-4316-b6dc-4f7889ec1da6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Verify Result</value>
         <variableId>0b88b121-17cb-4f80-8edd-5af032e1e689</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
