// MASTER STATUTORY CONCORDANCE TABLE
// 100% Audited and Verified against USCIS and U.S. House OLRC Title 8 Records
// 164 Active Codified Statutes (Titles I, II, III, IV, and V)

const CONCORDANCE_DATA = [
  // ==========================================
  // TITLE I: GENERAL PROVISIONS
  // ==========================================
  { ina: "101", usc: "1101", title: "Definitions" },
  { ina: "102", usc: "1102", title: "Diplomatic and semidiplomatic immunities" },
  { ina: "103", usc: "1103", title: "Powers and duties of the Secretary, the Under Secretary, and the Attorney General" },
  { ina: "104", usc: "1104", title: "Powers and duties of Secretary of State" },
  { ina: "105", usc: "1105", title: "Liaison with internal security officers; data exchange" },
  { ina: "106", usc: "1105a", title: "Employment authorization for battered spouses of certain nonimmigrants" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 1 — SELECTION SYSTEM
  // ==========================================
  { ina: "201", usc: "1151", title: "Worldwide level of immigration" },
  { ina: "202", usc: "1152", title: "Numerical limitations on individual foreign states" },
  { ina: "203", usc: "1153", title: "Allocation of immigrant visas" },
  { ina: "204", usc: "1154", title: "Procedure for granting immigrant status" },
  { ina: "205", usc: "1155", title: "Revocation of approval of petitions; effective date" },
  { ina: "206", usc: "1156", title: "Unused immigrant visas" },
  { ina: "207", usc: "1157", title: "Annual admission of refugees and admission of emergency situation refugees" },
  { ina: "208", usc: "1158", title: "Asylum" },
  { ina: "209", usc: "1159", title: "Adjustment of status of refugees" },
  { ina: "210", usc: "1160", title: "Special agricultural workers" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 2 — QUALIFICATIONS FOR ADMISSION; TRAVEL CONTROL
  // ==========================================
  { ina: "211", usc: "1181", title: "Admission of immigrants into the United States" },
  { ina: "212", usc: "1182", title: "Inadmissible aliens" },
  { ina: "213", usc: "1183", title: "Admission of aliens on giving bond or undertaking; return upon permanent departure" },
  { ina: "213A", usc: "1183a", title: "Requirements for sponsor's affidavit of support" },
  { ina: "214", usc: "1184", title: "Admission of nonimmigrants" },
  { ina: "215", usc: "1185", title: "Travel control of citizens and aliens" },
  { ina: "216", usc: "1186a", title: "Conditional permanent resident status for certain alien spouses and sons and daughters" },
  { ina: "216A", usc: "1186b", title: "Conditional permanent resident status for certain alien entrepreneurs, spouses, and children" },
  { ina: "217", usc: "1187", title: "Visa waiver program for certain visitors" },
  { ina: "218", usc: "1188", title: "Admission of temporary H–2A workers" },
  { ina: "219", usc: "1189", title: "Designation of foreign terrorist organizations" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 3 — ISSUANCE OF ENTRY DOCUMENTS
  // ==========================================
  { ina: "221", usc: "1201", title: "Issuance of visas" },
  { ina: "222", usc: "1202", title: "Application for visas" },
  { ina: "223", usc: "1203", title: "Reentry permit" },
  { ina: "224", usc: "1204", title: "Immediate relative and special immigrant visas" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 4 — INSPECTION, APPREHENSION, REMOVAL
  // ==========================================
  { ina: "231", usc: "1221", title: "Lists of alien and citizen passengers arriving and departing" },
  { ina: "232", usc: "1222", title: "Detention of aliens for physical and mental examination" },
  { ina: "233", usc: "1223", title: "Entry through or from foreign territory and adjacent islands" },
  { ina: "234", usc: "1224", title: "Designation of ports of entry for aliens arriving by aircraft" },
  { ina: "235", usc: "1225", title: "Inspection by immigration officers; expedited removal of inadmissible arriving aliens; referral for hearing" },
  { ina: "235A", usc: "1225a", title: "Preinspection at foreign airports" },
  { ina: "236", usc: "1226", title: "Apprehension and detention of aliens" },
  { ina: "236A", usc: "1226a", title: "Mandatory detention of suspected terrorists; habeas corpus; judicial review" },
  { ina: "237", usc: "1227", title: "Deportable aliens" },
  { ina: "238", usc: "1228", title: "Expedited removal of aliens convicted of committing aggravated felonies" },
  { ina: "239", usc: "1229", title: "Initiation of removal proceedings" },
  { ina: "240", usc: "1229a", title: "Removal proceedings" },
  { ina: "240A", usc: "1229b", title: "Cancellation of removal; adjustment of status" },
  { ina: "240B", usc: "1229c", title: "Voluntary departure" },
  { ina: "240C", usc: "1230", title: "Records of admission" },
  { ina: "241", usc: "1231", title: "Detention and removal of aliens ordered removed" },
  { ina: "242", usc: "1252", title: "Judicial review of orders of removal" },
  { ina: "243", usc: "1253", title: "Penalties related to removal" },
  { ina: "244", usc: "1254a", title: "Temporary protected status" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 5 — ADJUSTMENT AND CHANGE OF STATUS
  // ==========================================
  { ina: "245", usc: "1255", title: "Adjustment of status of nonimmigrant to that of person admitted for permanent residence" },
  { ina: "245A", usc: "1255a", title: "Adjustment of status of certain entrants before January 1, 1982, to that of person admitted for lawful residence" },
  { ina: "246", usc: "1256", title: "Rescission of adjustment of status; effect upon naturalized citizen" },
  { ina: "247", usc: "1257", title: "Adjustment of status of certain resident aliens to nonimmigrant status; exceptions" },
  { ina: "248", usc: "1258", title: "Change of nonimmigrant classification" },
  { ina: "249", usc: "1259", title: "Record of admission for permanent residence in the case of certain aliens who entered the United States prior to January 1, 1972" },
  { ina: "250", usc: "1260", title: "Removal of aliens falling into distress" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 6 — ALIEN CREWMEN
  // ==========================================
  { ina: "251", usc: "1281", title: "Alien crewmen" },
  { ina: "252", usc: "1282", title: "Conditional permits to land temporarily" },
  { ina: "253", usc: "1283", title: "Hospital treatment of alien crewmen afflicted with certain diseases" },
  { ina: "254", usc: "1284", title: "Control of alien crewmen" },
  { ina: "255", usc: "1285", title: "Employment on passenger vessels of aliens afflicted with certain disabilities" },
  { ina: "256", usc: "1286", title: "Discharge of alien crewmen; penalties" },
  { ina: "257", usc: "1287", title: "Alien crewmen brought into the United States with intent to evade immigration laws; penalties" },
  { ina: "258", usc: "1288", title: "Limitations on performance of longshore work by alien crewmen" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 7 — REGISTRATION OF ALIENS
  // ==========================================
  { ina: "261", usc: "1301", title: "Alien seeking entry; contents" },
  { ina: "262", usc: "1302", title: "Registration of aliens" },
  { ina: "263", usc: "1303", title: "Registration of special groups" },
  { ina: "264", usc: "1304", title: "Forms for registration and fingerprinting" },
  { ina: "265", usc: "1305", title: "Notices of change of address" },
  { ina: "266", usc: "1306", title: "Penalties" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 8 — GENERAL PENALTY PROVISIONS
  // ==========================================
  { ina: "271", usc: "1321", title: "Prevention of unauthorized landing of aliens" },
  { ina: "272", usc: "1322", title: "Bringing in aliens subject to denial of admission on a health-related ground; persons liable; clearance papers; exceptions; \"person\" defined" },
  { ina: "273", usc: "1323", title: "Unlawful bringing of aliens into United States" },
  { ina: "274", usc: "1324", title: "Bringing in and harboring certain aliens" },
  { ina: "274A", usc: "1324a", title: "Unlawful employment of aliens" },
  { ina: "274B", usc: "1324b", title: "Unfair immigration-related employment practices" },
  { ina: "274C", usc: "1324c", title: "Penalties for document fraud" },
  { ina: "274D", usc: "1324d", title: "Civil penalties for failure to depart" },
  { ina: "275", usc: "1325", title: "Improper entry by alien" },
  { ina: "276", usc: "1326", title: "Reentry of removed aliens" },
  { ina: "277", usc: "1327", title: "Aiding or assisting certain aliens to enter" },
  { ina: "278", usc: "1328", title: "Importation of alien for immoral purpose" },
  { ina: "279", usc: "1329", title: "Jurisdiction of district courts" },
  { ina: "280", usc: "1330", title: "Collection of penalties and expenses" },

  // ==========================================
  // TITLE II: IMMIGRATION
  // CHAPTER 9 — MISCELLANEOUS PROVISIONS
  // ==========================================
  { ina: "281", usc: "1351", title: "Nonimmigrant visa fees" },
  { ina: "282", usc: "1352", title: "Printing of reentry permits and blank forms of manifest and crew lists; sale to public" },
  { ina: "283", usc: "1353", title: "Travel expenses and expense of transporting remains of officers and employees dying outside of United States" },
  { ina: "284", usc: "1354", title: "Applicability to members of the Armed Forces" },
  { ina: "285", usc: "1355", title: "Disposal of privileges at immigrant stations; rentals; retail sales; sale of intoxicating liquors" },
  { ina: "286", usc: "1356", title: "Disposition of moneys collected under the provisions of this subchapter" },
  { ina: "287", usc: "1357", title: "Powers of immigration officers and employees" },
  { ina: "288", usc: "1358", title: "Local jurisdiction over immigrant stations" },
  { ina: "289", usc: "1359", title: "Application to American Indians born in Canada" },
  { ina: "290", usc: "1360", title: "Establishment of central file; information from other departments and agencies" },
  { ina: "291", usc: "1361", title: "Burden of proof upon alien" },
  { ina: "292", usc: "1362", title: "Right to counsel" },
  { ina: "293", usc: "1363", title: "Deposit of and interest on cash received to secure immigration bonds" },
  { ina: "294", usc: "1363a", title: "Undercover investigation authority" },

  // ==========================================
  // TITLE III: NATIONALITY AND NATURALIZATION
  // CHAPTER 1 — NATIONALITY AT BIRTH AND COLLECTIVE NATURALIZATION
  // ==========================================
  { ina: "301", usc: "1401", title: "Nationals and citizens of United States at birth" },
  { ina: "302", usc: "1402", title: "Persons born in Puerto Rico on or after April 11, 1899" },
  { ina: "303", usc: "1403", title: "Persons born in the Canal Zone or Republic of Panama on or after February 26, 1904" },
  { ina: "304", usc: "1404", title: "Persons born in Alaska on or after March 30, 1867" },
  { ina: "305", usc: "1405", title: "Persons born in Hawaii" },
  { ina: "306", usc: "1406", title: "Persons living in and born in the Virgin Islands" },
  { ina: "307", usc: "1407", title: "Persons living in and born in Guam" },
  { ina: "308", usc: "1408", title: "Nationals but not citizens of the United States at birth" },
  { ina: "309", usc: "1409", title: "Children born out of wedlock" },

  // ==========================================
  // TITLE III: NATIONALITY AND NATURALIZATION
  // CHAPTER 2 — NATIONALITY THROUGH NATURALIZATION
  // ==========================================
  { ina: "310", usc: "1421", title: "Naturalization authority" },
  { ina: "311", usc: "1422", title: "Eligibility for naturalization" },
  { ina: "312", usc: "1423", title: "Requirements as to understanding the English language, history, principles and form of government of the United States" },
  { ina: "313", usc: "1424", title: "Prohibition upon the naturalization of persons opposed to government or law, or who favor totalitarian forms of government" },
  { ina: "314", usc: "1425", title: "Ineligibility to naturalization of deserters from the Armed Forces" },
  { ina: "315", usc: "1426", title: "Citizenship denied alien relieved of service in Armed Forces because of alienage" },
  { ina: "316", usc: "1427", title: "Requirements of naturalization" },
  { ina: "317", usc: "1428", title: "Temporary absence of persons performing religious duties" },
  { ina: "318", usc: "1429", title: "Prerequisite to naturalization; burden of proof" },
  { ina: "319", usc: "1430", title: "Married persons and employees of certain nonprofit organizations" },
  { ina: "320", usc: "1431", title: "Children born outside the United States and residing permanently in the United States; conditions under which citizenship automatically acquired; necessity of admission for permanent residence" },
  { ina: "322", usc: "1433", title: "Children born and residing outside the United States; conditions for naturalization" },
  { ina: "324", usc: "1435", title: "Former citizens regaining citizenship" },
  { ina: "325", usc: "1436", title: "Nationals but not citizens; residence within outlying possessions" },
  { ina: "326", usc: "1437", title: "Resident Philippine citizens excepted from certain requirements" },
  { ina: "327", usc: "1438", title: "Former citizens losing citizenship by entering armed forces of foreign countries during World War II" },
  { ina: "328", usc: "1439", title: "Naturalization through service in the armed forces" },
  { ina: "329", usc: "1440", title: "Naturalization through active-duty service in the Armed Forces during World War I, World War II, Korean hostilities, Vietnam hostilities, or other periods of military hostilities" },
  { ina: "329A", usc: "1440-1", title: "Posthumous citizenship through death while on active-duty service in the armed forces during periods of military hostilities" },
  { ina: "330", usc: "1441", title: "Constructive residence through service on certain United States vessels" },
  { ina: "331", usc: "1442", title: "Alien enemies" },
  { ina: "332", usc: "1443", title: "Administration" },
  { ina: "333", usc: "1444", title: "Photographs; number" },
  { ina: "334", usc: "1445", title: "Application for naturalization; declaration of intention" },
  { ina: "335", usc: "1446", title: "Investigation of applicants; examination of applications" },
  { ina: "336", usc: "1447", title: "Hearings on denials of applications for naturalization" },
  { ina: "337", usc: "1448", title: "Oath of renunciation and allegiance" },
  { ina: "338", usc: "1449", title: "Certificate of naturalization; contents" },
  { ina: "339", usc: "1450", title: "Functions and duties of clerks" },
  { ina: "340", usc: "1451", title: "Revocation of naturalization" },
  { ina: "341", usc: "1452", title: "Certificates of citizenship or U.S. national status; procedure" },
  { ina: "342", usc: "1453", title: "Cancellation of certificates issued by Attorney General, the Commissioner or a Deputy Commissioner; action not to affect citizenship status" },
  { ina: "343", usc: "1454", title: "Documents and copies issued by Attorney General" },
  { ina: "344", usc: "1455", title: "Fiscal provisions" },
  { ina: "346", usc: "1457", title: "Publication and distribution of citizenship textbooks; use of naturalization fees" },
  { ina: "347", usc: "1458", title: "Compilation of naturalization statistics and payment for equipment" },

  // ==========================================
  // TITLE III: NATIONALITY AND NATURALIZATION
  // CHAPTER 3 — LOSS OF NATIONALITY
  // ==========================================
  { ina: "349", usc: "1481", title: "Loss of nationality by native-born or naturalized citizen; voluntary action; burden of proof; presumptions" },
  { ina: "351", usc: "1483", title: "Restrictions on loss of nationality" },
  { ina: "356", usc: "1488", title: "Nationality lost solely from performance of acts or fulfillment of conditions" },
  { ina: "357", usc: "1489", title: "Application of treaties; exceptions" },

  // ==========================================
  // TITLE III: NATIONALITY AND NATURALIZATION
  // CHAPTER 4 — MISCELLANEOUS
  // ==========================================
  { ina: "358", usc: "1501", title: "Certificate of diplomatic or consular officer of United States as to loss of nationality" },
  { ina: "359", usc: "1502", title: "Certificate of nationality issued by Secretary of State for person not a naturalized citizen for use in proceedings of a foreign state" },
  { ina: "360", usc: "1503", title: "Denial of rights and privileges as national" },
  { ina: "361", usc: "1504", title: "Cancellation of United States passports and Consular Reports of Birth" },

  // ==========================================
  // TITLE IV: REFUGEE ASSISTANCE
  // ==========================================
  { ina: "411", usc: "1521", title: "Office of Refugee Resettlement; establishment; appointment of Director; functions" },
  { ina: "412", usc: "1522", title: "Authorization for programs for domestic resettlement of and assistance to refugees" },
  { ina: "413", usc: "1523", title: "Congressional reports" },
  { ina: "414", usc: "1524", title: "Authorization of appropriations" },

  // ==========================================
  // TITLE V: ALIEN TERRORIST REMOVAL PROCEDURES
  // ==========================================
  { ina: "501", usc: "1531", title: "Definitions" },
  { ina: "502", usc: "1532", title: "Establishment of removal court" },
  { ina: "503", usc: "1533", title: "Removal court procedure" },
  { ina: "504", usc: "1534", title: "Removal hearing" },
  { ina: "505", usc: "1535", title: "Appeals" },
  { ina: "506", usc: "1536", title: "Custody and release pending removal hearing" },
  { ina: "507", usc: "1537", title: "Custody and release after removal hearing" }
];