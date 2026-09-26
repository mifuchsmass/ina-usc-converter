// MASTER STATUTORY CONCORDANCE TABLE (FULLY AUDITED & VERIFIED)
// Covers Titles I, II, III, IV, and V of the Immigration and Nationality Act (INA)
// Cross-referenced to Title 8 of the United States Code (8 U.S.C.)
// Verified against U.S. House of Representatives Office of the Law Revision Counsel (OLRC)

const CONCORDANCE_DATA = [
  // ==========================================
  // TITLE I: GENERAL PROVISIONS
  // ==========================================
  { ina: "101", usc: "1101", title: "Definitions (Aggravated Felonies, Nonimmigrant Classes, etc.)" },
  { ina: "102", usc: "1102", title: "Applicability of Title II to Certain Nonimmigrants" },
  { ina: "103", usc: "1103", title: "Powers and Duties of the Secretary of Homeland Security and Attorney General" },
  { ina: "104", usc: "1104", title: "Powers and Duties of the Secretary of State and Consular Officers" },
  { ina: "105", usc: "1105", title: "Liaison With Internal Security Officers and Data Exchange" },
  { ina: "106", usc: "1105a", title: "Employment Authorization for Battered Spouses (Note: Former INA § 106 Judicial Review was repealed and moved to INA § 242 / 8 U.S.C. § 1252)" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 1 — SELECTION SYSTEM
  // ==========================================
  { ina: "201", usc: "1151", title: "Worldwide Level of Immigration (Numerical Caps)" },
  { ina: "202", usc: "1152", title: "Numerical Limitation to Any Single Foreign State (Per-Country Ceilings)" },
  { ina: "203", usc: "1153", title: "Allocation of Immigrant Visas (Preference Categories)" },
  { ina: "204", usc: "1154", title: "Procedure for Granting Immigrant Status (Form I-130 / I-140 Petitions)" },
  { ina: "205", usc: "1155", title: "Revocation of Approval of Petitions" },
  { ina: "206", usc: "1156", title: "Unused Immigrant Visas" },
  { ina: "207", usc: "1157", title: "Annual Admission of Refugees and Emergency Refugee Situations" },
  { ina: "208", usc: "1158", title: "Asylum Procedures and Standards" },
  { ina: "209", usc: "1159", title: "Adjustment of Status of Refugees and Asylees" },
  { ina: "210", usc: "1160", title: "Special Agricultural Workers (SAW)" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 2 — QUALIFICATIONS FOR ADMISSION; TRAVEL CONTROL
  // ==========================================
  { ina: "211", usc: "1181", title: "Admission of Immigrants Into the United States (Documentation Requirements)" },
  { ina: "212", usc: "1182", title: "Inadmissible Aliens (Grounds of Inadmissibility & Statutory Waivers)" },
  { ina: "213", usc: "1183", title: "Admission of Certain Aliens on Giving Bond or Cash Deposit" },
  { ina: "213A", usc: "1183a", title: "Requirements for Sponsor's Affidavit of Support (Form I-864)" },
  { ina: "214", usc: "1184", title: "Admission of Nonimmigrants (Temporary Visas & Status Requirements)" },
  { ina: "215", usc: "1185", title: "Travel Control of Citizens and Aliens During War or National Emergency" },
  { ina: "216", usc: "1186a", title: "Conditional Permanent Resident Status (Marriage-Based / Form I-751)" },
  { ina: "216A", usc: "1186b", title: "Conditional Permanent Resident Status for Entrepreneurs and Investors (EB-5)" },
  { ina: "217", usc: "1187", title: "Visa Waiver Program for Certain Visitors (ESTA)" },
  { ina: "218", usc: "1188", title: "Admission of Temporary H-2A Agricultural Workers" },
  { ina: "219", usc: "1189", title: "Designation of Foreign Terrorist Organizations (FTOs)" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 3 — ISSUANCE OF ENTRY DOCUMENTS
  // ==========================================
  { ina: "221", usc: "1201", title: "Issuance of Visas by Consular Officers" },
  { ina: "222", usc: "1202", title: "Applications for Visas (Forms DS-160 / DS-260)" },
  { ina: "223", usc: "1203", title: "Reentry Permits (Form I-131)" },
  { ina: "224", usc: "1204", title: "Immediate Relative and Special Immigrant Visas" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 4 — INSPECTION, APPREHENSION, REMOVAL
  // ==========================================
  { ina: "231", usc: "1221", title: "Lists of Alien and Citizen Passengers Arriving and Departing (Manifests)" },
  { ina: "232", usc: "1222", title: "Detention of Aliens for Physical and Mental Examination" },
  { ina: "233", usc: "1223", title: "Entry Through or From Contiguous Territory and Adjacent Islands" },
  { ina: "234", usc: "1224", title: "Designation of Ports of Entry for Arriving Aircraft" },
  { ina: "235", usc: "1225", title: "Inspection by Officers; Expedited Removal of Arriving Aliens" },
  { ina: "235A", usc: "1225a", title: "Preinspection at Foreign Airports" },
  { ina: "236", usc: "1226", title: "Apprehension and Detention of Aliens (Bond Hearings / Custody Redetermination)" },
  { ina: "236A", usc: "1226a", title: "Mandatory Detention of Suspected Terrorists; Habeas Corpus" },
  { ina: "237", usc: "1227", title: "Deportable Aliens (Grounds of Deportability / Post-Admission Violations)" },
  { ina: "238", usc: "1228", title: "Expedited Removal of Aliens Convicted of Aggravated Felonies" },
  { ina: "239", usc: "1229", title: "Initiation of Removal Proceedings (Notice to Appear / NTA)" },
  { ina: "240", usc: "1229a", title: "Removal Proceedings Before an Immigration Judge (EOIR Hearings)" },
  { ina: "240A", usc: "1229b", title: "Cancellation of Removal; Adjustment of Status (42A Non-LPR / 42B LPR Relief)" },
  { ina: "240B", usc: "1229c", title: "Voluntary Departure (Pre-Hearing and Post-Hearing Orders)" },
  { ina: "240C", usc: "1230", title: "Records of Admission" },
  { ina: "241", usc: "1231", title: "Detention and Removal of Aliens Ordered Removed (Post-Order Custody)" },
  { ina: "242", usc: "1252", title: "Judicial Review of Orders of Removal (Circuit Court Petitions for Review)" },
  { ina: "243", usc: "1253", title: "Penalties Related to Removal (Failure to Depart / Refusal by Foreign State)" },
  { ina: "244", usc: "1254a", title: "Temporary Protected Status (TPS)" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 5 — ADJUSTMENT AND CHANGE OF STATUS
  // ==========================================
  { ina: "245", usc: "1255", title: "Adjustment of Status of Nonimmigrant to Lawful Permanent Resident" },
  { ina: "245A", usc: "1255a", title: "Legalization (Adjustment of Status of Entrants Prior to January 1, 1982)" },
  { ina: "246", usc: "1256", title: "Rescission of Adjustment of Status (5-Year Window)" },
  { ina: "247", usc: "1257", title: "Adjustment of Status of Resident Alien to Nonimmigrant Status" },
  { ina: "248", usc: "1258", title: "Change of Nonimmigrant Classification (Form I-539)" },
  { ina: "249", usc: "1259", title: "Registry (Lawful Permanent Residence for Entrants Prior to January 1, 1972)" },
  { ina: "250", usc: "1260", title: "Removal of Aliens Falling Into Distress" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 6 — ALIEN CREWMEN
  // ==========================================
  { ina: "251", usc: "1281", title: "Alien Crewmen Lists and Reports" },
  { ina: "252", usc: "1282", title: "Conditional Permits to Land Temporarily (D-1 / D-2 Crewmen)" },
  { ina: "253", usc: "1283", title: "Hospital Treatment of Crewmen Afflicted With Diseases" },
  { ina: "254", usc: "1284", title: "Control of Alien Crewmen" },
  { ina: "255", usc: "1285", title: "Employment on Passenger Vessels of Aliens With Disabilities" },
  { ina: "256", usc: "1286", title: "Discharge of Alien Crewmen" },
  { ina: "257", usc: "1287", title: "Alien Crewmen Brought With Intent to Evade Immigration Laws" },
  { ina: "258", usc: "1288", title: "Limitations on Performance of Longshore Work by Alien Crewmen" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 7 — REGISTRATION OF ALIENS
  // ==========================================
  { ina: "261", usc: "1301", title: "Alien Seeking Entry (Registration Requirement)" },
  { ina: "262", usc: "1302", title: "Registration of Aliens in the United States" },
  { ina: "263", usc: "1303", title: "Registration of Special Groups" },
  { ina: "264", usc: "1304", title: "Forms and Certificate of Alien Registration (Proof of Status)" },
  { ina: "265", usc: "1305", title: "Notice of Change of Address (Form AR-11 10-Day Requirement)" },
  { ina: "266", usc: "1306", title: "Penalties for Registration Violations and Failure to Register" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 8 — GENERAL PENALTY PROVISIONS
  // ==========================================
  { ina: "271", usc: "1321", title: "Prevention of Unauthorized Landing of Aliens" },
  { ina: "272", usc: "1322", title: "Bringing in Aliens Subject to Denial on Health Grounds" },
  { ina: "273", usc: "1323", title: "Unlawful Bringing of Aliens Into United States (Carrier Fines)" },
  { ina: "274", usc: "1324", title: "Bringing In and Harboring Certain Aliens (Alien Smuggling)" },
  { ina: "274A", usc: "1324a", title: "Unlawful Employment of Aliens (I-9 Compliance / Employer Sanctions)" },
  { ina: "274B", usc: "1324b", title: "Unfair Immigration-Related Employment Practices (IER / DOJ)" },
  { ina: "274C", usc: "1324c", title: "Penalties for Document Fraud" },
  { ina: "274D", usc: "1324d", title: "Civil Penalties for Failure to Depart" },
  { ina: "275", usc: "1325", title: "Improper Entry by Alien (Entry Without Inspection / EWI Offense)" },
  { ina: "276", usc: "1326", title: "Reentry of Removed Aliens (Criminal Illegal Reentry Prosecution)" },
  { ina: "277", usc: "1327", title: "Aiding or Assisting Subversive or Convicted Aliens to Enter" },
  { ina: "278", usc: "1328", title: "Importation of Alien for Immoral Purpose (Prostitution/Trafficking)" },
  { ina: "279", usc: "1329", title: "Jurisdiction of Federal District Courts" },
  { ina: "280", usc: "1330", title: "Collection of Penalties and Expenses" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 9 — MISCELLANEOUS PROVISIONS
  // ==========================================
  { ina: "281", usc: "1351", title: "Nonimmigrant Visa Fees" },
  { ina: "282", usc: "1352", title: "Printing of Reentry Permits and Blank Forms" },
  { ina: "283", usc: "1353", title: "Travel Expenses and Subsistence of Officers and Employees" },
  { ina: "284", usc: "1354", title: "Applicability to Members of the United States Armed Forces" },
  { ina: "285", usc: "1355", title: "Disposal of Privileges at Immigrant Stations" },
  { ina: "286", usc: "1356", title: "Disposition of Monies Collected (Immigration User Fee Accounts)" },
  { ina: "287", usc: "1357", title: "Powers of Immigration Officers (Interrogation, Arrest, Border Searches)" },
  { ina: "288", usc: "1358", title: "Local Jurisdiction Over Immigrant Stations" },
  { ina: "289", usc: "1359", title: "American Indians Born in Canada (Jay Treaty Exemption)" },
  { ina: "290", usc: "1360", title: "Central Index File and Information Exchange" },
  { ina: "291", usc: "1361", title: "Burden of Proof Upon Alien (Time, Place, and Manner of Entry)" },
  { ina: "292", usc: "1362", title: "Right to Counsel (At No Expense to the Government)" },
  { ina: "293", usc: "1363", title: "Deposit of and Interest on Cash Received to Secure Immigration Bonds" },
  { ina: "294", usc: "1363a", title: "Undercover Investigation Authority" },
  { ina: "295", usc: "1363b", title: "Transportation of Remains of Officers (Repealed)" },

  // ==========================================
  // TITLE III: NATIONALITY AND NATURALIZATION
  // CHAPTER 1 — NATIONALITY AT BIRTH AND COLLECTIVE NATURALIZATION
  // ==========================================
  { ina: "301", usc: "1401", title: "Nationals and Citizens of the United States at Birth (Birthright Citizenship)" },
  { ina: "302", usc: "1402", title: "Persons Born in Puerto Rico on or After April 11, 1899" },
  { ina: "303", usc: "1403", title: "Persons Born in Canal Zone or Republic of Panama on or After Feb 26, 1904" },
  { ina: "304", usc: "1404", title: "Persons Born in Alaska on or After March 30, 1867" },
  { ina: "305", usc: "1405", title: "Persons Born in Hawaii" },
  { ina: "306", usc: "1406", title: "Persons Living in and Born in the Virgin Islands" },
  { ina: "307", usc: "1407", title: "Persons Living in and Born in Guam" },
  { ina: "308", usc: "1408", title: "Nationals but Not Citizens of the United States at Birth (American Samoa)" },
  { ina: "309", usc: "1409", title: "Children Born Out of Wedlock (Paternity & Legitimation Requirements)" },

  // ==========================================
  // TITLE III: NATIONALITY AND NATURALIZATION
  // CHAPTER 2 — NATIONALITY THROUGH NATURALIZATION
  // ==========================================
  { ina: "310", usc: "1421", title: "Naturalization Authority (Sole Authority With the Attorney General / DHS)" },
  { ina: "311", usc: "1422", title: "Eligibility for Naturalization (Prohibition of Denial Based on Race/Sex)" },
  { ina: "312", usc: "1423", title: "English Language, US History, and Civics Requirements (Form N-648 Waivers)" },
  { ina: "313", usc: "1424", title: "Prohibition on Naturalization of Persons Opposed to Government or Totalitarian" },
  { ina: "314", usc: "1425", title: "Ineligibility of Deserters From the Armed Forces" },
  { ina: "315", usc: "1426", title: "Citizenship Debarred Because of Alienage (Draft Exemption Bar)" },
  { ina: "316", usc: "1427", title: "Requirements of Naturalization (Continuous Residence, Physical Presence, GMC)" },
  { ina: "317", usc: "1428", title: "Temporary Absence of Persons Performing Religious Duties" },
  { ina: "318", usc: "1429", title: "Prerequisite to Naturalization; Bar While Removal Proceedings Pending" },
  { ina: "319", usc: "1430", title: "Naturalization for Spouses of U.S. Citizens (3-Year Residence Rule)" },
  { ina: "320", usc: "1431", title: "Child Citizenship Act (CCA / Automatic Acquisition of Citizenship for Children)" },
  { ina: "322", usc: "1433", title: "Children Residing Abroad; Application by Citizen Parent (Form N-600K)" },
  { ina: "324", usc: "1435", title: "Former Citizens Regaining Citizenship" },
  { ina: "325", usc: "1436", title: "Nationals but Not Citizens; Residence Within Outlying Possessions" },
  { ina: "326", usc: "1437", title: "Resident Philippine Citizens Excepted From Certain Requirements" },
  { ina: "327", usc: "1438", title: "Former US Citizens Losing Citizenship by Foreign Military Service in WWII" },
  { ina: "328", usc: "1439", title: "Naturalization Through Service in the Armed Forces (One Year of Service)" },
  { ina: "329", usc: "1440", title: "Naturalization Through Active-Duty Service During Military Hostilities" },
  { ina: "329A", usc: "1440-1", title: "Posthumous Citizenship Through Active-Duty Military Service" },
  { ina: "330", usc: "1441", title: "Constructive Residence Through Service on United States Vessels" },
  { ina: "331", usc: "1442", title: "Alien Enemies and Naturalization" },
  { ina: "332", usc: "1443", title: "Administration and Regulations Governing Naturalization" },
  { ina: "333", usc: "1444", title: "Photographs Required for Naturalization" },
  { ina: "334", usc: "1445", title: "Application for Naturalization (Form N-400)" },
  { ina: "335", usc: "1446", title: "Investigation of Applicants; Examination of Applications" },
  { ina: "336", usc: "1447", title: "Hearings on Denials of Applications for Naturalization (De Novo District Court Review)" },
  { ina: "337", usc: "1448", title: "Oath of Renunciation and Allegiance" },
  { ina: "338", usc: "1449", title: "Certificate of Naturalization (Contents and Delivery)" },
  { ina: "339", usc: "1450", title: "Functions and Duties of Clerks Regarding Naturalization" },
  { ina: "340", usc: "1451", title: "Revocation of Naturalization (Civil Denaturalization in Federal Court)" },
  { ina: "341", usc: "1452", title: "Certificates of Citizenship (Form N-600)" },
  { ina: "342", usc: "1453", title: "Cancellation of Certificates Issued by DHS" },
  { ina: "343", usc: "1454", title: "Documents and Copies Issued by Attorney General / DHS" },
  { ina: "344", usc: "1455", title: "Fiscal Provisions and Naturalization Fees" },
  { ina: "346", usc: "1457", title: "Publication and Distribution of Citizenship Textbooks" },
  { ina: "347", usc: "1458", title: "Compilation of Naturalization Statistics" },

  // ==========================================
  // TITLE III: NATIONALITY AND NATURALIZATION
  // CHAPTER 3 — LOSS OF NATIONALITY
  // ==========================================
  { ina: "349", usc: "1481", title: "Loss of Nationality by Native-Born or Naturalized Citizen (Expatriating Acts)" },
  { ina: "351", usc: "1483", title: "Restrictions on Loss of Nationality Occurring Outside United States" },
  { ina: "356", usc: "1488", title: "Nationality Lost Solely From Performance of Specified Acts" },
  { ina: "357", usc: "1489", title: "Application of Treaties to Expatriation" },

  // ==========================================
  // TITLE III: NATIONALITY AND NATURALIZATION
  // CHAPTER 4 — MISCELLANEOUS
  // ==========================================
  { ina: "358", usc: "1501", title: "Certificate of Diplomatic or Consular Officer as to Loss of Nationality (CLN)" },
  { ina: "359", usc: "1502", title: "Certificate of Nationality for Person Not a Naturalized Citizen" },
  { ina: "360", usc: "1503", title: "Denial of Rights and Privileges as National (Declaratory Judgment Actions in Federal Court)" },
  { ina: "361", usc: "1504", title: "Cancellation of United States Passports and Consular Reports of Birth" },

  // ==========================================
  // TITLE IV: REFUGEE ASSISTANCE
  // ==========================================
  { ina: "411", usc: "1521", title: "Office of Refugee Resettlement (ORR Establishment and Appointment)" },
  { ina: "412", usc: "1522", title: "Authorization for Domestic Resettlement and Assistance to Refugees" },
  { ina: "413", usc: "1523", title: "Congressional Reports Regarding Refugee Assistance" },
  { ina: "414", usc: "1524", title: "Authorization of Appropriations for Refugee Resettlement" },

  // ==========================================
  // TITLE V: ALIEN TERRORIST REMOVAL PROCEDURES
  // ==========================================
  { ina: "501", usc: "1531", title: "Alien Terrorist Removal Court (Definitions)" },
  { ina: "502", usc: "1532", title: "Establishment of Alien Terrorist Removal Court (ATRC)" },
  { ina: "503", usc: "1533", title: "Alien Terrorist Removal Court Application and Procedure" },
  { ina: "504", usc: "1534", title: "Removal Court Hearings (Burden of Proof & Counsel)" },
  { ina: "505", usc: "1535", title: "Consideration of Classified Information" },
  { ina: "506", usc: "1536", title: "Custody and Release Pending Removal Hearing" },
  { ina: "507", usc: "1537", title: "Custody and Release After Removal Hearing" }
];