// Generated from /Users/henrylin/dev/cli-cypher/src/lang/Cypher.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CypherListener from "./CypherListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CypherParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly CYPHER = 54;
	public static readonly EXPLAIN = 55;
	public static readonly PROFILE = 56;
	public static readonly USING = 57;
	public static readonly PERIODIC = 58;
	public static readonly COMMIT = 59;
	public static readonly UNION = 60;
	public static readonly ALL = 61;
	public static readonly CREATE = 62;
	public static readonly DROP = 63;
	public static readonly INDEX = 64;
	public static readonly ON = 65;
	public static readonly CONSTRAINT = 66;
	public static readonly ASSERT = 67;
	public static readonly IS = 68;
	public static readonly UNIQUE = 69;
	public static readonly EXISTS = 70;
	public static readonly LOAD = 71;
	public static readonly CSV = 72;
	public static readonly WITH = 73;
	public static readonly HEADERS = 74;
	public static readonly FROM = 75;
	public static readonly AS = 76;
	public static readonly FIELDTERMINATOR = 77;
	public static readonly OPTIONAL = 78;
	public static readonly MATCH = 79;
	public static readonly UNWIND = 80;
	public static readonly MERGE = 81;
	public static readonly SET = 82;
	public static readonly DETACH = 83;
	public static readonly DELETE = 84;
	public static readonly REMOVE = 85;
	public static readonly FOREACH = 86;
	public static readonly IN = 87;
	public static readonly DISTINCT = 88;
	public static readonly RETURN = 89;
	public static readonly ORDER = 90;
	public static readonly BY = 91;
	public static readonly L_SKIP = 92;
	public static readonly LIMIT = 93;
	public static readonly ASCENDING = 94;
	public static readonly ASC = 95;
	public static readonly DESCENDING = 96;
	public static readonly DESC = 97;
	public static readonly JOIN = 98;
	public static readonly SCAN = 99;
	public static readonly START = 100;
	public static readonly NODE = 101;
	public static readonly RELATIONSHIP = 102;
	public static readonly REL = 103;
	public static readonly WHERE = 104;
	public static readonly SHORTESTPATH = 105;
	public static readonly ALLSHORTESTPATHS = 106;
	public static readonly OR = 107;
	public static readonly XOR = 108;
	public static readonly AND = 109;
	public static readonly NOT = 110;
	public static readonly STARTS = 111;
	public static readonly ENDS = 112;
	public static readonly CONTAINS = 113;
	public static readonly NULL = 114;
	public static readonly COUNT = 115;
	public static readonly FILTER = 116;
	public static readonly EXTRACT = 117;
	public static readonly ANY = 118;
	public static readonly NONE = 119;
	public static readonly SINGLE = 120;
	public static readonly TRUE = 121;
	public static readonly FALSE = 122;
	public static readonly REDUCE = 123;
	public static readonly CASE = 124;
	public static readonly ELSE = 125;
	public static readonly END = 126;
	public static readonly WHEN = 127;
	public static readonly THEN = 128;
	public static readonly CALL = 129;
	public static readonly YIELD = 130;
	public static readonly KEY = 131;
	public static readonly CATALOG = 132;
	public static readonly SHOW = 133;
	public static readonly DEFAULT = 134;
	public static readonly DBMS = 135;
	public static readonly DATABASE = 136;
	public static readonly DATABASES = 137;
	public static readonly GRAPH = 138;
	public static readonly GRAPHS = 139;
	public static readonly REPLACE = 140;
	public static readonly IF = 141;
	public static readonly STOP = 142;
	public static readonly ROLE = 143;
	public static readonly ROLES = 144;
	public static readonly USER = 145;
	public static readonly USERS = 146;
	public static readonly POPULATED = 147;
	public static readonly PASSWORD = 148;
	public static readonly CHANGE = 149;
	public static readonly REQUIRED = 150;
	public static readonly STATUS = 151;
	public static readonly ACTIVE = 152;
	public static readonly SUSPENDED = 153;
	public static readonly ALTER = 154;
	public static readonly CURRENT = 155;
	public static readonly TO = 156;
	public static readonly PRIVILEGES = 157;
	public static readonly GRANT = 158;
	public static readonly DENY = 159;
	public static readonly REVOKE = 160;
	public static readonly RELATIONSHIPS = 161;
	public static readonly NODES = 162;
	public static readonly ELEMENT = 163;
	public static readonly ELEMENTS = 164;
	public static readonly COPY = 165;
	public static readonly OF = 166;
	public static readonly TRAVERSE = 167;
	public static readonly READ = 168;
	public static readonly WRITE = 169;
	public static readonly ACCESS = 170;
	public static readonly INDEXES = 171;
	public static readonly MANAGEMENT = 172;
	public static readonly NEW = 173;
	public static readonly LABEL = 174;
	public static readonly LABELS = 175;
	public static readonly NAME = 176;
	public static readonly NAMES = 177;
	public static readonly TYPE = 178;
	public static readonly TYPES = 179;
	public static readonly PROPERTY = 180;
	public static readonly CONSTRAINTS = 181;
	public static readonly ASSIGN = 182;
	public static readonly BTREE = 183;
	public static readonly EXIST = 184;
	public static readonly FOR = 185;
	public static readonly OPTIONS = 186;
	public static readonly EXECUTE = 187;
	public static readonly DEFINED = 188;
	public static readonly FUNCTION = 189;
	public static readonly FUNCTIONS = 190;
	public static readonly BOOSTED = 191;
	public static readonly PROCEDURE = 192;
	public static readonly PROCEDURES = 193;
	public static readonly ADMIN = 194;
	public static readonly ADMINISTRATOR = 195;
	public static readonly BRIEF = 196;
	public static readonly VERBOSE = 197;
	public static readonly OUTPUT = 198;
	public static readonly StringLiteral = 199;
	public static readonly UrlHex = 200;
	public static readonly EscapedChar = 201;
	public static readonly HexInteger = 202;
	public static readonly DecimalInteger = 203;
	public static readonly OctalInteger = 204;
	public static readonly HexLetter = 205;
	public static readonly HexDigit = 206;
	public static readonly Digit = 207;
	public static readonly NonZeroDigit = 208;
	public static readonly NonZeroOctDigit = 209;
	public static readonly OctDigit = 210;
	public static readonly ZeroDigit = 211;
	public static readonly ExponentDecimalReal = 212;
	public static readonly RegularDecimalReal = 213;
	public static readonly UnescapedSymbolicName = 214;
	public static readonly IdentifierStart = 215;
	public static readonly IdentifierPart = 216;
	public static readonly EscapedSymbolicName = 217;
	public static readonly SP = 218;
	public static readonly WHITESPACE = 219;
	public static readonly Comment = 220;
	public static readonly ERROR_TOKEN = 221;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_cypher = 0;
	public static readonly RULE_cypherPart = 1;
	public static readonly RULE_cypherConsoleCommand = 2;
	public static readonly RULE_cypherConsoleCommandName = 3;
	public static readonly RULE_cypherConsoleCommandParameters = 4;
	public static readonly RULE_cypherConsoleCommandParameter = 5;
	public static readonly RULE_arrowExpression = 6;
	public static readonly RULE_url = 7;
	public static readonly RULE_uri = 8;
	public static readonly RULE_scheme = 9;
	public static readonly RULE_host = 10;
	public static readonly RULE_hostname = 11;
	public static readonly RULE_hostnumber = 12;
	public static readonly RULE_port = 13;
	public static readonly RULE_path = 14;
	public static readonly RULE_user = 15;
	public static readonly RULE_login = 16;
	public static readonly RULE_password = 17;
	public static readonly RULE_frag = 18;
	public static readonly RULE_urlQuery = 19;
	public static readonly RULE_search = 20;
	public static readonly RULE_searchparameter = 21;
	public static readonly RULE_string = 22;
	public static readonly RULE_urlDigits = 23;
	public static readonly RULE_json = 24;
	public static readonly RULE_obj = 25;
	public static readonly RULE_pair = 26;
	public static readonly RULE_array = 27;
	public static readonly RULE_value = 28;
	public static readonly RULE_keyValueLiteral = 29;
	public static readonly RULE_commandPath = 30;
	public static readonly RULE_subCommand = 31;
	public static readonly RULE_cypherQuery = 32;
	public static readonly RULE_queryOptions = 33;
	public static readonly RULE_anyCypherOption = 34;
	public static readonly RULE_cypherOption = 35;
	public static readonly RULE_versionNumber = 36;
	public static readonly RULE_explain = 37;
	public static readonly RULE_profile = 38;
	public static readonly RULE_configurationOption = 39;
	public static readonly RULE_statement = 40;
	public static readonly RULE_query = 41;
	public static readonly RULE_regularQuery = 42;
	public static readonly RULE_bulkImportQuery = 43;
	public static readonly RULE_singleQuery = 44;
	public static readonly RULE_periodicCommitHint = 45;
	public static readonly RULE_loadCSVQuery = 46;
	public static readonly RULE_union = 47;
	public static readonly RULE_clause = 48;
	public static readonly RULE_command = 49;
	public static readonly RULE_systemCommand = 50;
	public static readonly RULE_multidatabaseCommand = 51;
	public static readonly RULE_userCommand = 52;
	public static readonly RULE_privilegeCommand = 53;
	public static readonly RULE_showRoles = 54;
	public static readonly RULE_createRole = 55;
	public static readonly RULE_copyRole = 56;
	public static readonly RULE_dropRole = 57;
	public static readonly RULE_showUsers = 58;
	public static readonly RULE_createUser = 59;
	public static readonly RULE_dropUser = 60;
	public static readonly RULE_alterUser = 61;
	public static readonly RULE_showPrivileges = 62;
	public static readonly RULE_grantPrivilege = 63;
	public static readonly RULE_denyPrivilege = 64;
	public static readonly RULE_revokePrivilege = 65;
	public static readonly RULE_revokePart = 66;
	public static readonly RULE_databaseScope = 67;
	public static readonly RULE_graphScope = 68;
	public static readonly RULE_roles = 69;
	public static readonly RULE_grantableGraphPrivileges = 70;
	public static readonly RULE_revokeableGraphPrivileges = 71;
	public static readonly RULE_datasbasePrivilege = 72;
	public static readonly RULE_dbmsPrivilege = 73;
	public static readonly RULE_elementScope = 74;
	public static readonly RULE_propertiesList = 75;
	public static readonly RULE_propertyScope = 76;
	public static readonly RULE_showDatabase = 77;
	public static readonly RULE_createDatabase = 78;
	public static readonly RULE_dropDatabase = 79;
	public static readonly RULE_startDatabase = 80;
	public static readonly RULE_stopDatabase = 81;
	public static readonly RULE_ifNotExists = 82;
	public static readonly RULE_ifExists = 83;
	public static readonly RULE_orReplace = 84;
	public static readonly RULE_setPassword = 85;
	public static readonly RULE_passwordStatus = 86;
	public static readonly RULE_setStatus = 87;
	public static readonly RULE_userStatus = 88;
	public static readonly RULE_createUniqueConstraint = 89;
	public static readonly RULE_createNodeKeyConstraint = 90;
	public static readonly RULE_createNodePropertyExistenceConstraint = 91;
	public static readonly RULE_createRelationshipPropertyExistenceConstraint = 92;
	public static readonly RULE_createIndex = 93;
	public static readonly RULE_dropUniqueConstraint = 94;
	public static readonly RULE_dropNodeKeyConstraint = 95;
	public static readonly RULE_dropNodePropertyExistenceConstraint = 96;
	public static readonly RULE_dropRelationshipPropertyExistenceConstraint = 97;
	public static readonly RULE_dropIndex = 98;
	public static readonly RULE_index = 99;
	public static readonly RULE_uniqueConstraint = 100;
	public static readonly RULE_nodeKeyConstraint = 101;
	public static readonly RULE_nodePropertyExistenceConstraint = 102;
	public static readonly RULE_relationshipPropertyExistenceConstraint = 103;
	public static readonly RULE_relationshipPatternSyntax = 104;
	public static readonly RULE_loadCSVClause = 105;
	public static readonly RULE_matchClause = 106;
	public static readonly RULE_unwindClause = 107;
	public static readonly RULE_mergeClause = 108;
	public static readonly RULE_mergeAction = 109;
	public static readonly RULE_createClause = 110;
	public static readonly RULE_createUniqueClause = 111;
	public static readonly RULE_setClause = 112;
	public static readonly RULE_setItem = 113;
	public static readonly RULE_deleteClause = 114;
	public static readonly RULE_removeClause = 115;
	public static readonly RULE_removeItem = 116;
	public static readonly RULE_foreachClause = 117;
	public static readonly RULE_withClause = 118;
	public static readonly RULE_returnClause = 119;
	public static readonly RULE_returnBody = 120;
	public static readonly RULE_func = 121;
	public static readonly RULE_returnItems = 122;
	public static readonly RULE_returnItem = 123;
	public static readonly RULE_call = 124;
	public static readonly RULE_procedureInvocation = 125;
	public static readonly RULE_procedureInvocationBody = 126;
	public static readonly RULE_procedureArguments = 127;
	public static readonly RULE_procedureResults = 128;
	public static readonly RULE_procedureResult = 129;
	public static readonly RULE_aliasedProcedureResult = 130;
	public static readonly RULE_simpleProcedureResult = 131;
	public static readonly RULE_procedureOutput = 132;
	public static readonly RULE_order = 133;
	public static readonly RULE_skip = 134;
	public static readonly RULE_limit = 135;
	public static readonly RULE_sortItem = 136;
	public static readonly RULE_hint = 137;
	public static readonly RULE_startClause = 138;
	public static readonly RULE_startPoint = 139;
	public static readonly RULE_lookup = 140;
	public static readonly RULE_nodeLookup = 141;
	public static readonly RULE_relationshipLookup = 142;
	public static readonly RULE_identifiedIndexLookup = 143;
	public static readonly RULE_indexQuery = 144;
	public static readonly RULE_idLookup = 145;
	public static readonly RULE_literalIds = 146;
	public static readonly RULE_where = 147;
	public static readonly RULE_pattern = 148;
	public static readonly RULE_patternPart = 149;
	public static readonly RULE_anonymousPatternPart = 150;
	public static readonly RULE_patternElement = 151;
	public static readonly RULE_nodePattern = 152;
	public static readonly RULE_patternElementChain = 153;
	public static readonly RULE_relationshipPattern = 154;
	public static readonly RULE_relationshipPatternStart = 155;
	public static readonly RULE_relationshipPatternEnd = 156;
	public static readonly RULE_relationshipDetail = 157;
	public static readonly RULE_properties = 158;
	public static readonly RULE_relType = 159;
	public static readonly RULE_relationshipTypes = 160;
	public static readonly RULE_relationshipType = 161;
	public static readonly RULE_relationshipTypeOptionalColon = 162;
	public static readonly RULE_nodeLabels = 163;
	public static readonly RULE_nodeLabel = 164;
	public static readonly RULE_rangeLiteral = 165;
	public static readonly RULE_labelName = 166;
	public static readonly RULE_relTypeName = 167;
	public static readonly RULE_expression = 168;
	public static readonly RULE_orExpression = 169;
	public static readonly RULE_xorExpression = 170;
	public static readonly RULE_andExpression = 171;
	public static readonly RULE_notExpression = 172;
	public static readonly RULE_comparisonExpression = 173;
	public static readonly RULE_addOrSubtractExpression = 174;
	public static readonly RULE_multiplyDivideModuloExpression = 175;
	public static readonly RULE_powerOfExpression = 176;
	public static readonly RULE_unaryAddOrSubtractExpression = 177;
	public static readonly RULE_stringListNullOperatorExpression = 178;
	public static readonly RULE_propertyOrLabelsExpression = 179;
	public static readonly RULE_filterFunction = 180;
	public static readonly RULE_filterFunctionName = 181;
	public static readonly RULE_existsFunction = 182;
	public static readonly RULE_existsFunctionName = 183;
	public static readonly RULE_allFunction = 184;
	public static readonly RULE_allFunctionName = 185;
	public static readonly RULE_anyFunction = 186;
	public static readonly RULE_anyFunctionName = 187;
	public static readonly RULE_noneFunction = 188;
	public static readonly RULE_noneFunctionName = 189;
	public static readonly RULE_singleFunction = 190;
	public static readonly RULE_singleFunctionName = 191;
	public static readonly RULE_extractFunction = 192;
	public static readonly RULE_extractFunctionName = 193;
	public static readonly RULE_reduceFunction = 194;
	public static readonly RULE_reduceFunctionName = 195;
	public static readonly RULE_shortestPathPatternFunction = 196;
	public static readonly RULE_shortestPathFunctionName = 197;
	public static readonly RULE_allShortestPathFunctionName = 198;
	public static readonly RULE_atom = 199;
	public static readonly RULE_literal = 200;
	public static readonly RULE_stringLiteral = 201;
	public static readonly RULE_booleanLiteral = 202;
	public static readonly RULE_listLiteral = 203;
	public static readonly RULE_partialComparisonExpression = 204;
	public static readonly RULE_parenthesizedExpression = 205;
	public static readonly RULE_relationshipsPattern = 206;
	public static readonly RULE_filterExpression = 207;
	public static readonly RULE_idInColl = 208;
	public static readonly RULE_functionInvocation = 209;
	public static readonly RULE_functionInvocationBody = 210;
	public static readonly RULE_functionName = 211;
	public static readonly RULE_procedureName = 212;
	public static readonly RULE_listComprehension = 213;
	public static readonly RULE_patternComprehension = 214;
	public static readonly RULE_propertyLookup = 215;
	public static readonly RULE_caseExpression = 216;
	public static readonly RULE_caseAlternatives = 217;
	public static readonly RULE_variable = 218;
	public static readonly RULE_numberLiteral = 219;
	public static readonly RULE_mapLiteral = 220;
	public static readonly RULE_mapProjection = 221;
	public static readonly RULE_mapProjectionVariants = 222;
	public static readonly RULE_literalEntry = 223;
	public static readonly RULE_propertySelector = 224;
	public static readonly RULE_variableSelector = 225;
	public static readonly RULE_allPropertiesSelector = 226;
	public static readonly RULE_parameter = 227;
	public static readonly RULE_legacyParameter = 228;
	public static readonly RULE_newParameter = 229;
	public static readonly RULE_parameterName = 230;
	public static readonly RULE_propertyExpressions = 231;
	public static readonly RULE_propertyExpression = 232;
	public static readonly RULE_propertyKeys = 233;
	public static readonly RULE_propertyKeyName = 234;
	public static readonly RULE_integerLiteral = 235;
	public static readonly RULE_doubleLiteral = 236;
	public static readonly RULE_namespace = 237;
	public static readonly RULE_leftArrowHead = 238;
	public static readonly RULE_rightArrowHead = 239;
	public static readonly RULE_dash = 240;
	public static readonly RULE_symbolicName = 241;
	public static readonly RULE_keyword = 242;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "':'", "'-'", 
                                                            "'=>'", "'://'", 
                                                            "'/'", "'.'", 
                                                            "'@'", "'#'", 
                                                            "'?'", "'&'", 
                                                            "'='", "'+'", 
                                                            "'{'", "','", 
                                                            "'}'", "'['", 
                                                            "']'", "'*'", 
                                                            "'('", "')'", 
                                                            "'+='", "'|'", 
                                                            "'..'", "'%'", 
                                                            "'^'", "'=~'", 
                                                            "'<>'", "'!='", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'$'", "'\\u27E8'", 
                                                            "'\\u3008'", 
                                                            "'\\uFE64'", 
                                                            "'\\uFF1C'", 
                                                            "'\\u27E9'", 
                                                            "'\\u3009'", 
                                                            "'\\uFE65'", 
                                                            "'\\uFF1E'", 
                                                            "'\\u00AD'", 
                                                            "'\\u2010'", 
                                                            "'\\u2011'", 
                                                            "'\\u2012'", 
                                                            "'\\u2013'", 
                                                            "'\\u2014'", 
                                                            "'\\u2015'", 
                                                            "'\\u2212'", 
                                                            "'\\uFE58'", 
                                                            "'\\uFE63'", 
                                                            "'\\uFF0D'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'0'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "CYPHER", "EXPLAIN", 
                                                             "PROFILE", 
                                                             "USING", "PERIODIC", 
                                                             "COMMIT", "UNION", 
                                                             "ALL", "CREATE", 
                                                             "DROP", "INDEX", 
                                                             "ON", "CONSTRAINT", 
                                                             "ASSERT", "IS", 
                                                             "UNIQUE", "EXISTS", 
                                                             "LOAD", "CSV", 
                                                             "WITH", "HEADERS", 
                                                             "FROM", "AS", 
                                                             "FIELDTERMINATOR", 
                                                             "OPTIONAL", 
                                                             "MATCH", "UNWIND", 
                                                             "MERGE", "SET", 
                                                             "DETACH", "DELETE", 
                                                             "REMOVE", "FOREACH", 
                                                             "IN", "DISTINCT", 
                                                             "RETURN", "ORDER", 
                                                             "BY", "L_SKIP", 
                                                             "LIMIT", "ASCENDING", 
                                                             "ASC", "DESCENDING", 
                                                             "DESC", "JOIN", 
                                                             "SCAN", "START", 
                                                             "NODE", "RELATIONSHIP", 
                                                             "REL", "WHERE", 
                                                             "SHORTESTPATH", 
                                                             "ALLSHORTESTPATHS", 
                                                             "OR", "XOR", 
                                                             "AND", "NOT", 
                                                             "STARTS", "ENDS", 
                                                             "CONTAINS", 
                                                             "NULL", "COUNT", 
                                                             "FILTER", "EXTRACT", 
                                                             "ANY", "NONE", 
                                                             "SINGLE", "TRUE", 
                                                             "FALSE", "REDUCE", 
                                                             "CASE", "ELSE", 
                                                             "END", "WHEN", 
                                                             "THEN", "CALL", 
                                                             "YIELD", "KEY", 
                                                             "CATALOG", 
                                                             "SHOW", "DEFAULT", 
                                                             "DBMS", "DATABASE", 
                                                             "DATABASES", 
                                                             "GRAPH", "GRAPHS", 
                                                             "REPLACE", 
                                                             "IF", "STOP", 
                                                             "ROLE", "ROLES", 
                                                             "USER", "USERS", 
                                                             "POPULATED", 
                                                             "PASSWORD", 
                                                             "CHANGE", "REQUIRED", 
                                                             "STATUS", "ACTIVE", 
                                                             "SUSPENDED", 
                                                             "ALTER", "CURRENT", 
                                                             "TO", "PRIVILEGES", 
                                                             "GRANT", "DENY", 
                                                             "REVOKE", "RELATIONSHIPS", 
                                                             "NODES", "ELEMENT", 
                                                             "ELEMENTS", 
                                                             "COPY", "OF", 
                                                             "TRAVERSE", 
                                                             "READ", "WRITE", 
                                                             "ACCESS", "INDEXES", 
                                                             "MANAGEMENT", 
                                                             "NEW", "LABEL", 
                                                             "LABELS", "NAME", 
                                                             "NAMES", "TYPE", 
                                                             "TYPES", "PROPERTY", 
                                                             "CONSTRAINTS", 
                                                             "ASSIGN", "BTREE", 
                                                             "EXIST", "FOR", 
                                                             "OPTIONS", 
                                                             "EXECUTE", 
                                                             "DEFINED", 
                                                             "FUNCTION", 
                                                             "FUNCTIONS", 
                                                             "BOOSTED", 
                                                             "PROCEDURE", 
                                                             "PROCEDURES", 
                                                             "ADMIN", "ADMINISTRATOR", 
                                                             "BRIEF", "VERBOSE", 
                                                             "OUTPUT", "StringLiteral", 
                                                             "UrlHex", "EscapedChar", 
                                                             "HexInteger", 
                                                             "DecimalInteger", 
                                                             "OctalInteger", 
                                                             "HexLetter", 
                                                             "HexDigit", 
                                                             "Digit", "NonZeroDigit", 
                                                             "NonZeroOctDigit", 
                                                             "OctDigit", 
                                                             "ZeroDigit", 
                                                             "ExponentDecimalReal", 
                                                             "RegularDecimalReal", 
                                                             "UnescapedSymbolicName", 
                                                             "IdentifierStart", 
                                                             "IdentifierPart", 
                                                             "EscapedSymbolicName", 
                                                             "SP", "WHITESPACE", 
                                                             "Comment", 
                                                             "ERROR_TOKEN" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cypher", "cypherPart", "cypherConsoleCommand", "cypherConsoleCommandName", 
		"cypherConsoleCommandParameters", "cypherConsoleCommandParameter", "arrowExpression", 
		"url", "uri", "scheme", "host", "hostname", "hostnumber", "port", "path", 
		"user", "login", "password", "frag", "urlQuery", "search", "searchparameter", 
		"string", "urlDigits", "json", "obj", "pair", "array", "value", "keyValueLiteral", 
		"commandPath", "subCommand", "cypherQuery", "queryOptions", "anyCypherOption", 
		"cypherOption", "versionNumber", "explain", "profile", "configurationOption", 
		"statement", "query", "regularQuery", "bulkImportQuery", "singleQuery", 
		"periodicCommitHint", "loadCSVQuery", "union", "clause", "command", "systemCommand", 
		"multidatabaseCommand", "userCommand", "privilegeCommand", "showRoles", 
		"createRole", "copyRole", "dropRole", "showUsers", "createUser", "dropUser", 
		"alterUser", "showPrivileges", "grantPrivilege", "denyPrivilege", "revokePrivilege", 
		"revokePart", "databaseScope", "graphScope", "roles", "grantableGraphPrivileges", 
		"revokeableGraphPrivileges", "datasbasePrivilege", "dbmsPrivilege", "elementScope", 
		"propertiesList", "propertyScope", "showDatabase", "createDatabase", "dropDatabase", 
		"startDatabase", "stopDatabase", "ifNotExists", "ifExists", "orReplace", 
		"setPassword", "passwordStatus", "setStatus", "userStatus", "createUniqueConstraint", 
		"createNodeKeyConstraint", "createNodePropertyExistenceConstraint", "createRelationshipPropertyExistenceConstraint", 
		"createIndex", "dropUniqueConstraint", "dropNodeKeyConstraint", "dropNodePropertyExistenceConstraint", 
		"dropRelationshipPropertyExistenceConstraint", "dropIndex", "index", "uniqueConstraint", 
		"nodeKeyConstraint", "nodePropertyExistenceConstraint", "relationshipPropertyExistenceConstraint", 
		"relationshipPatternSyntax", "loadCSVClause", "matchClause", "unwindClause", 
		"mergeClause", "mergeAction", "createClause", "createUniqueClause", "setClause", 
		"setItem", "deleteClause", "removeClause", "removeItem", "foreachClause", 
		"withClause", "returnClause", "returnBody", "func", "returnItems", "returnItem", 
		"call", "procedureInvocation", "procedureInvocationBody", "procedureArguments", 
		"procedureResults", "procedureResult", "aliasedProcedureResult", "simpleProcedureResult", 
		"procedureOutput", "order", "skip", "limit", "sortItem", "hint", "startClause", 
		"startPoint", "lookup", "nodeLookup", "relationshipLookup", "identifiedIndexLookup", 
		"indexQuery", "idLookup", "literalIds", "where", "pattern", "patternPart", 
		"anonymousPatternPart", "patternElement", "nodePattern", "patternElementChain", 
		"relationshipPattern", "relationshipPatternStart", "relationshipPatternEnd", 
		"relationshipDetail", "properties", "relType", "relationshipTypes", "relationshipType", 
		"relationshipTypeOptionalColon", "nodeLabels", "nodeLabel", "rangeLiteral", 
		"labelName", "relTypeName", "expression", "orExpression", "xorExpression", 
		"andExpression", "notExpression", "comparisonExpression", "addOrSubtractExpression", 
		"multiplyDivideModuloExpression", "powerOfExpression", "unaryAddOrSubtractExpression", 
		"stringListNullOperatorExpression", "propertyOrLabelsExpression", "filterFunction", 
		"filterFunctionName", "existsFunction", "existsFunctionName", "allFunction", 
		"allFunctionName", "anyFunction", "anyFunctionName", "noneFunction", "noneFunctionName", 
		"singleFunction", "singleFunctionName", "extractFunction", "extractFunctionName", 
		"reduceFunction", "reduceFunctionName", "shortestPathPatternFunction", 
		"shortestPathFunctionName", "allShortestPathFunctionName", "atom", "literal", 
		"stringLiteral", "booleanLiteral", "listLiteral", "partialComparisonExpression", 
		"parenthesizedExpression", "relationshipsPattern", "filterExpression", 
		"idInColl", "functionInvocation", "functionInvocationBody", "functionName", 
		"procedureName", "listComprehension", "patternComprehension", "propertyLookup", 
		"caseExpression", "caseAlternatives", "variable", "numberLiteral", "mapLiteral", 
		"mapProjection", "mapProjectionVariants", "literalEntry", "propertySelector", 
		"variableSelector", "allPropertiesSelector", "parameter", "legacyParameter", 
		"newParameter", "parameterName", "propertyExpressions", "propertyExpression", 
		"propertyKeys", "propertyKeyName", "integerLiteral", "doubleLiteral", 
		"namespace", "leftArrowHead", "rightArrowHead", "dash", "symbolicName", 
		"keyword",
	];
	public get grammarFileName(): string { return "Cypher.g4"; }
	public get literalNames(): (string | null)[] { return CypherParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CypherParser.symbolicNames; }
	public get ruleNames(): string[] { return CypherParser.ruleNames; }
	public get serializedATN(): number[] { return CypherParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CypherParser._ATN, CypherParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public cypher(): CypherContext {
		let localctx: CypherContext = new CypherContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CypherParser.RULE_cypher);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 486;
			this.cypherPart();
			this.state = 491;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 487;
					this.match(CypherParser.T__0);
					this.state = 488;
					this.cypherPart();
					}
					}
				}
				this.state = 493;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 494;
				this.match(CypherParser.T__0);
				}
			}

			this.state = 497;
			this.match(CypherParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherPart(): CypherPartContext {
		let localctx: CypherPartContext = new CypherPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CypherParser.RULE_cypherPart);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 500;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 499;
				this.match(CypherParser.SP);
				}
			}

			this.state = 504;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
			case 55:
			case 56:
			case 57:
			case 62:
			case 63:
			case 71:
			case 73:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 89:
			case 100:
			case 129:
			case 132:
			case 133:
			case 142:
			case 154:
			case 158:
			case 159:
			case 160:
				{
				this.state = 502;
				this.cypherQuery();
				}
				break;
			case 2:
				{
				this.state = 503;
				this.cypherConsoleCommand();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 506;
				this.match(CypherParser.SP);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherConsoleCommand(): CypherConsoleCommandContext {
		let localctx: CypherConsoleCommandContext = new CypherConsoleCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CypherParser.RULE_cypherConsoleCommand);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
			this.cypherConsoleCommandName();
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 510;
				this.match(CypherParser.SP);
				this.state = 511;
				this.cypherConsoleCommandParameters();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherConsoleCommandName(): CypherConsoleCommandNameContext {
		let localctx: CypherConsoleCommandNameContext = new CypherConsoleCommandNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CypherParser.RULE_cypherConsoleCommandName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 514;
			this.match(CypherParser.T__1);
			this.state = 515;
			this.symbolicName();
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 516;
				this.match(CypherParser.T__2);
				this.state = 517;
				this.symbolicName();
				}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherConsoleCommandParameters(): CypherConsoleCommandParametersContext {
		let localctx: CypherConsoleCommandParametersContext = new CypherConsoleCommandParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CypherParser.RULE_cypherConsoleCommandParameters);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 523;
			this.cypherConsoleCommandParameter();
			this.state = 528;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 524;
					this.match(CypherParser.SP);
					this.state = 525;
					this.cypherConsoleCommandParameter();
					}
					}
				}
				this.state = 530;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherConsoleCommandParameter(): CypherConsoleCommandParameterContext {
		let localctx: CypherConsoleCommandParameterContext = new CypherConsoleCommandParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CypherParser.RULE_cypherConsoleCommandParameter);
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 531;
				this.url();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 532;
				this.json();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 533;
				this.arrowExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 534;
				this.mapLiteral();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 535;
				this.keyValueLiteral();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 536;
				this.stringLiteral();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 537;
				this.numberLiteral();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 538;
				this.booleanLiteral();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 539;
				this.subCommand();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 540;
				this.commandPath();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrowExpression(): ArrowExpressionContext {
		let localctx: ArrowExpressionContext = new ArrowExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, CypherParser.RULE_arrowExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 543;
			this.symbolicName();
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 544;
				this.match(CypherParser.SP);
				}
			}

			this.state = 547;
			this.match(CypherParser.T__3);
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 548;
				this.match(CypherParser.SP);
				}
			}

			this.state = 551;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let localctx: UrlContext = new UrlContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, CypherParser.RULE_url);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 553;
			this.uri();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uri(): UriContext {
		let localctx: UriContext = new UriContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, CypherParser.RULE_uri);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 555;
			this.scheme();
			this.state = 556;
			this.match(CypherParser.T__4);
			this.state = 558;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 557;
				this.login();
				}
				break;
			}
			this.state = 560;
			this.host();
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 561;
				this.match(CypherParser.T__1);
				this.state = 562;
				this.port();
				}
			}

			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 565;
				this.match(CypherParser.T__5);
				this.state = 566;
				this.path();
				}
			}

			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 569;
				this.urlQuery();
				}
			}

			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 572;
				this.frag();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scheme(): SchemeContext {
		let localctx: SchemeContext = new SchemeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, CypherParser.RULE_scheme);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 575;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public host(): HostContext {
		let localctx: HostContext = new HostContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, CypherParser.RULE_host);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 577;
				this.match(CypherParser.T__5);
				}
			}

			this.state = 582;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 205:
			case 214:
			case 217:
				{
				this.state = 580;
				this.hostname();
				}
				break;
			case 202:
			case 203:
			case 204:
				{
				this.state = 581;
				this.hostnumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hostname(): HostnameContext {
		let localctx: HostnameContext = new HostnameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, CypherParser.RULE_hostname);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 584;
			this.string_();
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===7) {
				{
				{
				this.state = 585;
				this.match(CypherParser.T__6);
				this.state = 586;
				this.string_();
				}
				}
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hostnumber(): HostnumberContext {
		let localctx: HostnumberContext = new HostnumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, CypherParser.RULE_hostnumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 592;
			this.urlDigits();
			this.state = 593;
			this.match(CypherParser.T__6);
			this.state = 594;
			this.urlDigits();
			this.state = 595;
			this.match(CypherParser.T__6);
			this.state = 596;
			this.urlDigits();
			this.state = 597;
			this.match(CypherParser.T__6);
			this.state = 598;
			this.urlDigits();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public port(): PortContext {
		let localctx: PortContext = new PortContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, CypherParser.RULE_port);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 600;
			this.urlDigits();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let localctx: PathContext = new PathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, CypherParser.RULE_path);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 602;
			this.string_();
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 603;
				this.match(CypherParser.T__5);
				this.state = 604;
				this.string_();
				}
				}
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public user(): UserContext {
		let localctx: UserContext = new UserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, CypherParser.RULE_user);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 610;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public login(): LoginContext {
		let localctx: LoginContext = new LoginContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, CypherParser.RULE_login);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 612;
			this.user();
			this.state = 613;
			this.match(CypherParser.T__1);
			this.state = 614;
			this.password();
			this.state = 615;
			this.match(CypherParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public password(): PasswordContext {
		let localctx: PasswordContext = new PasswordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, CypherParser.RULE_password);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 617;
			this.string_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frag(): FragContext {
		let localctx: FragContext = new FragContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, CypherParser.RULE_frag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 619;
			this.match(CypherParser.T__8);
			this.state = 620;
			this.string_();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public urlQuery(): UrlQueryContext {
		let localctx: UrlQueryContext = new UrlQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, CypherParser.RULE_urlQuery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 622;
			this.match(CypherParser.T__9);
			this.state = 623;
			this.search();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public search(): SearchContext {
		let localctx: SearchContext = new SearchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, CypherParser.RULE_search);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 625;
			this.searchparameter();
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 626;
				this.match(CypherParser.T__10);
				this.state = 627;
				this.searchparameter();
				}
				}
				this.state = 632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public searchparameter(): SearchparameterContext {
		let localctx: SearchparameterContext = new SearchparameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, CypherParser.RULE_searchparameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 633;
			this.string_();
			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 634;
				this.match(CypherParser.T__11);
				this.state = 638;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 205:
				case 214:
				case 217:
					{
					this.state = 635;
					this.string_();
					}
					break;
				case 202:
				case 203:
				case 204:
					{
					this.state = 636;
					this.urlDigits();
					}
					break;
				case 200:
					{
					this.state = 637;
					this.match(CypherParser.UrlHex);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, CypherParser.RULE_string);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 642;
			this.symbolicName();
			this.state = 649;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===7 || _la===13) {
						{
						this.state = 643;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===13)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
					}

					this.state = 646;
					this.symbolicName();
					}
					}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public urlDigits(): UrlDigitsContext {
		let localctx: UrlDigitsContext = new UrlDigitsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, CypherParser.RULE_urlDigits);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 652;
				this.integerLiteral();
				}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 7) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let localctx: JsonContext = new JsonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, CypherParser.RULE_json);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 657;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let localctx: ObjContext = new ObjContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, CypherParser.RULE_obj);
		let _la: number;
		try {
			this.state = 687;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 659;
				this.match(CypherParser.T__13);
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 660;
					this.match(CypherParser.SP);
					}
				}

				this.state = 663;
				this.pair();
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 664;
					this.match(CypherParser.SP);
					}
				}

				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 667;
					this.match(CypherParser.T__14);
					this.state = 669;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 668;
						this.match(CypherParser.SP);
						}
					}

					this.state = 671;
					this.pair();
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 672;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 679;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 680;
				this.match(CypherParser.T__15);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 682;
				this.match(CypherParser.T__13);
				this.state = 684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 683;
					this.match(CypherParser.SP);
					}
				}

				this.state = 686;
				this.match(CypherParser.T__15);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let localctx: PairContext = new PairContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, CypherParser.RULE_pair);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 689;
			this.stringLiteral();
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 690;
				this.match(CypherParser.SP);
				}
			}

			this.state = 693;
			this.match(CypherParser.T__1);
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 694;
				this.match(CypherParser.SP);
				}
			}

			this.state = 697;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let localctx: ArrayContext = new ArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, CypherParser.RULE_array);
		let _la: number;
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 699;
				this.match(CypherParser.T__16);
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 700;
					this.match(CypherParser.SP);
					}
				}

				this.state = 703;
				this.value();
				this.state = 705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 704;
					this.match(CypherParser.SP);
					}
				}

				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 707;
					this.match(CypherParser.T__14);
					this.state = 709;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 708;
						this.match(CypherParser.SP);
						}
					}

					this.state = 711;
					this.value();
					this.state = 713;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 712;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 719;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 720;
				this.match(CypherParser.T__17);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 722;
				this.match(CypherParser.T__16);
				this.state = 724;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 723;
					this.match(CypherParser.SP);
					}
				}

				this.state = 726;
				this.match(CypherParser.T__17);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, CypherParser.RULE_value);
		try {
			this.state = 735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 199:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 729;
				this.stringLiteral();
				}
				break;
			case 202:
			case 203:
			case 204:
			case 212:
			case 213:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 730;
				this.numberLiteral();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 731;
				this.obj();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 732;
				this.array();
				}
				break;
			case 121:
			case 122:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 733;
				this.booleanLiteral();
				}
				break;
			case 114:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 734;
				this.match(CypherParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyValueLiteral(): KeyValueLiteralContext {
		let localctx: KeyValueLiteralContext = new KeyValueLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, CypherParser.RULE_keyValueLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 737;
			this.variable();
			this.state = 738;
			this.match(CypherParser.T__1);
			this.state = 739;
			this.match(CypherParser.SP);
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 740;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case 2:
				{
				this.state = 741;
				this.numberLiteral();
				}
				break;
			case 3:
				{
				this.state = 742;
				this.booleanLiteral();
				}
				break;
			case 4:
				{
				this.state = 743;
				this.symbolicName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commandPath(): CommandPathContext {
		let localctx: CommandPathContext = new CommandPathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, CypherParser.RULE_commandPath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 751;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 746;
					this.match(CypherParser.T__5);
					this.state = 749;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 54:
					case 55:
					case 56:
					case 57:
					case 58:
					case 59:
					case 60:
					case 61:
					case 62:
					case 63:
					case 64:
					case 65:
					case 66:
					case 67:
					case 68:
					case 69:
					case 70:
					case 71:
					case 72:
					case 73:
					case 74:
					case 75:
					case 76:
					case 77:
					case 78:
					case 79:
					case 80:
					case 81:
					case 82:
					case 83:
					case 84:
					case 85:
					case 86:
					case 87:
					case 88:
					case 89:
					case 90:
					case 91:
					case 92:
					case 93:
					case 94:
					case 95:
					case 96:
					case 97:
					case 98:
					case 99:
					case 100:
					case 101:
					case 102:
					case 103:
					case 104:
					case 105:
					case 106:
					case 107:
					case 108:
					case 109:
					case 110:
					case 111:
					case 112:
					case 113:
					case 114:
					case 115:
					case 116:
					case 117:
					case 118:
					case 119:
					case 120:
					case 121:
					case 122:
					case 123:
					case 124:
					case 125:
					case 126:
					case 127:
					case 128:
					case 129:
					case 130:
					case 131:
					case 132:
					case 133:
					case 134:
					case 135:
					case 136:
					case 137:
					case 138:
					case 139:
					case 140:
					case 141:
					case 142:
					case 143:
					case 144:
					case 145:
					case 146:
					case 147:
					case 148:
					case 149:
					case 150:
					case 151:
					case 152:
					case 153:
					case 154:
					case 155:
					case 156:
					case 157:
					case 158:
					case 159:
					case 160:
					case 161:
					case 162:
					case 163:
					case 164:
					case 165:
					case 166:
					case 167:
					case 168:
					case 169:
					case 170:
					case 171:
					case 172:
					case 173:
					case 174:
					case 175:
					case 176:
					case 177:
					case 178:
					case 179:
					case 180:
					case 181:
					case 182:
					case 183:
					case 184:
					case 185:
					case 186:
					case 187:
					case 188:
					case 189:
					case 190:
					case 191:
					case 192:
					case 193:
					case 194:
					case 195:
					case 196:
					case 197:
					case 198:
					case 205:
					case 214:
					case 217:
						{
						this.state = 747;
						this.symbolicName();
						}
						break;
					case 202:
					case 203:
					case 204:
					case 212:
					case 213:
						{
						this.state = 748;
						this.numberLiteral();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 753;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===6) {
				{
				this.state = 755;
				this.match(CypherParser.T__5);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subCommand(): SubCommandContext {
		let localctx: SubCommandContext = new SubCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, CypherParser.RULE_subCommand);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 758;
			this.symbolicName();
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 759;
				this.match(CypherParser.T__2);
				this.state = 760;
				this.symbolicName();
				}
				}
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherQuery(): CypherQueryContext {
		let localctx: CypherQueryContext = new CypherQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, CypherParser.RULE_cypherQuery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 766;
			this.queryOptions();
			this.state = 767;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public queryOptions(): QueryOptionsContext {
		let localctx: QueryOptionsContext = new QueryOptionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, CypherParser.RULE_queryOptions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 7) !== 0)) {
				{
				{
				this.state = 769;
				this.anyCypherOption();
				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 770;
					this.match(CypherParser.SP);
					}
				}

				}
				}
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anyCypherOption(): AnyCypherOptionContext {
		let localctx: AnyCypherOptionContext = new AnyCypherOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, CypherParser.RULE_anyCypherOption);
		try {
			this.state = 781;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 778;
				this.cypherOption();
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 779;
				this.explain();
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 780;
				this.profile();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cypherOption(): CypherOptionContext {
		let localctx: CypherOptionContext = new CypherOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, CypherParser.RULE_cypherOption);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 783;
			this.match(CypherParser.CYPHER);
			this.state = 786;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 784;
				this.match(CypherParser.SP);
				this.state = 785;
				this.versionNumber();
				}
				break;
			}
			this.state = 792;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 788;
					this.match(CypherParser.SP);
					this.state = 789;
					this.configurationOption();
					}
					}
				}
				this.state = 794;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public versionNumber(): VersionNumberContext {
		let localctx: VersionNumberContext = new VersionNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, CypherParser.RULE_versionNumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 795;
			this.match(CypherParser.RegularDecimalReal);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explain(): ExplainContext {
		let localctx: ExplainContext = new ExplainContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, CypherParser.RULE_explain);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 797;
			this.match(CypherParser.EXPLAIN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public profile(): ProfileContext {
		let localctx: ProfileContext = new ProfileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, CypherParser.RULE_profile);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 799;
			this.match(CypherParser.PROFILE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public configurationOption(): ConfigurationOptionContext {
		let localctx: ConfigurationOptionContext = new ConfigurationOptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, CypherParser.RULE_configurationOption);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 801;
			this.symbolicName();
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 802;
				this.match(CypherParser.SP);
				}
			}

			this.state = 805;
			this.match(CypherParser.T__11);
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 806;
				this.match(CypherParser.SP);
				}
			}

			this.state = 809;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, CypherParser.RULE_statement);
		let _la: number;
		try {
			this.state = 818;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 811;
				this.command();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 812;
				this.query();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===132) {
					{
					this.state = 813;
					this.match(CypherParser.CATALOG);
					this.state = 814;
					this.match(CypherParser.SP);
					}
				}

				this.state = 817;
				this.systemCommand();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let localctx: QueryContext = new QueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, CypherParser.RULE_query);
		try {
			this.state = 822;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 62:
			case 71:
			case 73:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 89:
			case 100:
			case 129:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 820;
				this.regularQuery();
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 821;
				this.bulkImportQuery();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public regularQuery(): RegularQueryContext {
		let localctx: RegularQueryContext = new RegularQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, CypherParser.RULE_regularQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 824;
			this.singleQuery();
			this.state = 831;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 826;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 825;
						this.match(CypherParser.SP);
						}
					}

					this.state = 828;
					this.union();
					}
					}
				}
				this.state = 833;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bulkImportQuery(): BulkImportQueryContext {
		let localctx: BulkImportQueryContext = new BulkImportQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, CypherParser.RULE_bulkImportQuery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 834;
			this.periodicCommitHint();
			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 835;
				this.match(CypherParser.SP);
				}
			}

			this.state = 838;
			this.loadCSVQuery();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleQuery(): SingleQueryContext {
		let localctx: SingleQueryContext = new SingleQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, CypherParser.RULE_singleQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 840;
			this.clause();
			this.state = 847;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 842;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 841;
						this.match(CypherParser.SP);
						}
					}

					this.state = 844;
					this.clause();
					}
					}
				}
				this.state = 849;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public periodicCommitHint(): PeriodicCommitHintContext {
		let localctx: PeriodicCommitHintContext = new PeriodicCommitHintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, CypherParser.RULE_periodicCommitHint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 850;
			this.match(CypherParser.USING);
			this.state = 851;
			this.match(CypherParser.SP);
			this.state = 852;
			this.match(CypherParser.PERIODIC);
			this.state = 853;
			this.match(CypherParser.SP);
			this.state = 854;
			this.match(CypherParser.COMMIT);
			this.state = 857;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 855;
				this.match(CypherParser.SP);
				this.state = 856;
				this.integerLiteral();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loadCSVQuery(): LoadCSVQueryContext {
		let localctx: LoadCSVQueryContext = new LoadCSVQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, CypherParser.RULE_loadCSVQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 859;
			this.loadCSVClause();
			this.state = 866;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 861;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 860;
						this.match(CypherParser.SP);
						}
					}

					this.state = 863;
					this.clause();
					}
					}
				}
				this.state = 868;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public union(): UnionContext {
		let localctx: UnionContext = new UnionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, CypherParser.RULE_union);
		let _la: number;
		try {
			this.state = 881;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 869;
				this.match(CypherParser.UNION);
				this.state = 870;
				this.match(CypherParser.SP);
				this.state = 871;
				this.match(CypherParser.ALL);
				this.state = 873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 872;
					this.match(CypherParser.SP);
					}
				}

				this.state = 875;
				this.singleQuery();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 876;
				this.match(CypherParser.UNION);
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 877;
					this.match(CypherParser.SP);
					}
				}

				this.state = 880;
				this.singleQuery();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public clause(): ClauseContext {
		let localctx: ClauseContext = new ClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, CypherParser.RULE_clause);
		try {
			this.state = 897;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 883;
				this.loadCSVClause();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 884;
				this.startClause();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 885;
				this.matchClause();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 886;
				this.unwindClause();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 887;
				this.mergeClause();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 888;
				this.createClause();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 889;
				this.createUniqueClause();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 890;
				this.setClause();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 891;
				this.deleteClause();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 892;
				this.removeClause();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 893;
				this.foreachClause();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 894;
				this.withClause();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 895;
				this.returnClause();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 896;
				this.call();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let localctx: CommandContext = new CommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, CypherParser.RULE_command);
		try {
			this.state = 909;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 899;
				this.createIndex();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 900;
				this.dropIndex();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 901;
				this.createUniqueConstraint();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 902;
				this.dropUniqueConstraint();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 903;
				this.createNodeKeyConstraint();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 904;
				this.dropNodeKeyConstraint();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 905;
				this.createNodePropertyExistenceConstraint();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 906;
				this.dropNodePropertyExistenceConstraint();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 907;
				this.createRelationshipPropertyExistenceConstraint();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 908;
				this.dropRelationshipPropertyExistenceConstraint();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public systemCommand(): SystemCommandContext {
		let localctx: SystemCommandContext = new SystemCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, CypherParser.RULE_systemCommand);
		try {
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 911;
				this.multidatabaseCommand();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 912;
				this.userCommand();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 913;
				this.privilegeCommand();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multidatabaseCommand(): MultidatabaseCommandContext {
		let localctx: MultidatabaseCommandContext = new MultidatabaseCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, CypherParser.RULE_multidatabaseCommand);
		try {
			this.state = 921;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 133:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 916;
				this.showDatabase();
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 917;
				this.createDatabase();
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 918;
				this.dropDatabase();
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 919;
				this.startDatabase();
				}
				break;
			case 142:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 920;
				this.stopDatabase();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userCommand(): UserCommandContext {
		let localctx: UserCommandContext = new UserCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, CypherParser.RULE_userCommand);
		try {
			this.state = 930;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 923;
				this.showRoles();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 924;
				this.createRole();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 925;
				this.dropRole();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 926;
				this.showUsers();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 927;
				this.createUser();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 928;
				this.dropUser();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 929;
				this.alterUser();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public privilegeCommand(): PrivilegeCommandContext {
		let localctx: PrivilegeCommandContext = new PrivilegeCommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, CypherParser.RULE_privilegeCommand);
		try {
			this.state = 936;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 133:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 932;
				this.showPrivileges();
				}
				break;
			case 158:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 933;
				this.grantPrivilege();
				}
				break;
			case 159:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 934;
				this.denyPrivilege();
				}
				break;
			case 160:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 935;
				this.revokePrivilege();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showRoles(): ShowRolesContext {
		let localctx: ShowRolesContext = new ShowRolesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, CypherParser.RULE_showRoles);
		let _la: number;
		try {
			this.state = 964;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 938;
				this.match(CypherParser.SHOW);
				this.state = 939;
				this.match(CypherParser.SP);
				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===61) {
					{
					this.state = 940;
					this.match(CypherParser.ALL);
					this.state = 941;
					this.match(CypherParser.SP);
					}
				}

				this.state = 944;
				this.match(CypherParser.ROLES);
				this.state = 949;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 945;
					this.match(CypherParser.SP);
					this.state = 946;
					this.match(CypherParser.WITH);
					this.state = 947;
					this.match(CypherParser.SP);
					this.state = 948;
					this.match(CypherParser.USERS);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 951;
				this.match(CypherParser.SHOW);
				this.state = 952;
				this.match(CypherParser.SP);
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===147) {
					{
					this.state = 953;
					this.match(CypherParser.POPULATED);
					this.state = 954;
					this.match(CypherParser.SP);
					}
				}

				this.state = 957;
				this.match(CypherParser.ROLES);
				this.state = 962;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 958;
					this.match(CypherParser.SP);
					this.state = 959;
					this.match(CypherParser.WITH);
					this.state = 960;
					this.match(CypherParser.SP);
					this.state = 961;
					this.match(CypherParser.USERS);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createRole(): CreateRoleContext {
		let localctx: CreateRoleContext = new CreateRoleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, CypherParser.RULE_createRole);
		let _la: number;
		try {
			this.state = 993;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 966;
				this.match(CypherParser.CREATE);
				this.state = 967;
				this.match(CypherParser.SP);
				this.state = 968;
				this.match(CypherParser.ROLE);
				this.state = 969;
				this.match(CypherParser.SP);
				this.state = 970;
				this.symbolicName();
				this.state = 973;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
				case 1:
					{
					this.state = 971;
					this.match(CypherParser.SP);
					this.state = 972;
					this.ifNotExists();
					}
					break;
				}
				this.state = 977;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 975;
					this.match(CypherParser.SP);
					this.state = 976;
					this.copyRole();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 979;
				this.match(CypherParser.CREATE);
				this.state = 980;
				this.match(CypherParser.SP);
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 981;
					this.orReplace();
					this.state = 982;
					this.match(CypherParser.SP);
					}
				}

				this.state = 986;
				this.match(CypherParser.ROLE);
				this.state = 987;
				this.match(CypherParser.SP);
				this.state = 988;
				this.symbolicName();
				this.state = 991;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 989;
					this.match(CypherParser.SP);
					this.state = 990;
					this.copyRole();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public copyRole(): CopyRoleContext {
		let localctx: CopyRoleContext = new CopyRoleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, CypherParser.RULE_copyRole);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 995;
			this.match(CypherParser.AS);
			this.state = 996;
			this.match(CypherParser.SP);
			this.state = 997;
			this.match(CypherParser.COPY);
			this.state = 998;
			this.match(CypherParser.SP);
			this.state = 999;
			this.match(CypherParser.OF);
			this.state = 1000;
			this.match(CypherParser.SP);
			this.state = 1001;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropRole(): DropRoleContext {
		let localctx: DropRoleContext = new DropRoleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, CypherParser.RULE_dropRole);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1003;
			this.match(CypherParser.DROP);
			this.state = 1004;
			this.match(CypherParser.SP);
			this.state = 1005;
			this.match(CypherParser.ROLE);
			this.state = 1006;
			this.match(CypherParser.SP);
			this.state = 1007;
			this.symbolicName();
			this.state = 1012;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 1008;
				this.match(CypherParser.SP);
				this.state = 1009;
				this.match(CypherParser.IF);
				this.state = 1010;
				this.match(CypherParser.SP);
				this.state = 1011;
				this.match(CypherParser.EXISTS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showUsers(): ShowUsersContext {
		let localctx: ShowUsersContext = new ShowUsersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, CypherParser.RULE_showUsers);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1014;
			this.match(CypherParser.SHOW);
			this.state = 1015;
			this.match(CypherParser.SP);
			this.state = 1016;
			this.match(CypherParser.USERS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createUser(): CreateUserContext {
		let localctx: CreateUserContext = new CreateUserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, CypherParser.RULE_createUser);
		let _la: number;
		try {
			this.state = 1049;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1018;
				this.match(CypherParser.CREATE);
				this.state = 1019;
				this.match(CypherParser.SP);
				this.state = 1020;
				this.match(CypherParser.USER);
				this.state = 1021;
				this.match(CypherParser.SP);
				this.state = 1022;
				this.user();
				this.state = 1023;
				this.match(CypherParser.SP);
				this.state = 1026;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1024;
					this.match(CypherParser.SP);
					this.state = 1025;
					this.ifNotExists();
					}
				}

				this.state = 1028;
				this.setPassword();
				this.state = 1031;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 1029;
					this.match(CypherParser.SP);
					this.state = 1030;
					this.setStatus();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1033;
				this.match(CypherParser.CREATE);
				this.state = 1034;
				this.match(CypherParser.SP);
				this.state = 1038;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 1035;
					this.orReplace();
					this.state = 1036;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1040;
				this.match(CypherParser.USER);
				this.state = 1041;
				this.match(CypherParser.SP);
				this.state = 1042;
				this.user();
				this.state = 1043;
				this.match(CypherParser.SP);
				this.state = 1044;
				this.setPassword();
				this.state = 1047;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 1045;
					this.match(CypherParser.SP);
					this.state = 1046;
					this.setStatus();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropUser(): DropUserContext {
		let localctx: DropUserContext = new DropUserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, CypherParser.RULE_dropUser);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1051;
			this.match(CypherParser.DROP);
			this.state = 1052;
			this.match(CypherParser.SP);
			this.state = 1053;
			this.match(CypherParser.USER);
			this.state = 1054;
			this.match(CypherParser.SP);
			this.state = 1055;
			this.user();
			this.state = 1058;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				this.state = 1056;
				this.match(CypherParser.SP);
				this.state = 1057;
				this.ifExists();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alterUser(): AlterUserContext {
		let localctx: AlterUserContext = new AlterUserContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, CypherParser.RULE_alterUser);
		try {
			this.state = 1101;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1060;
				this.match(CypherParser.ALTER);
				this.state = 1061;
				this.match(CypherParser.SP);
				this.state = 1062;
				this.match(CypherParser.CURRENT);
				this.state = 1063;
				this.match(CypherParser.SP);
				this.state = 1064;
				this.match(CypherParser.USER);
				this.state = 1065;
				this.match(CypherParser.SP);
				this.state = 1066;
				this.match(CypherParser.SET);
				this.state = 1067;
				this.match(CypherParser.SP);
				this.state = 1068;
				this.match(CypherParser.PASSWORD);
				this.state = 1069;
				this.match(CypherParser.SP);
				this.state = 1070;
				this.match(CypherParser.FROM);
				this.state = 1071;
				this.match(CypherParser.SP);
				this.state = 1074;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 205:
				case 214:
				case 217:
					{
					this.state = 1072;
					this.password();
					}
					break;
				case 14:
				case 34:
					{
					this.state = 1073;
					this.parameter();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1076;
				this.match(CypherParser.TO);
				this.state = 1077;
				this.match(CypherParser.SP);
				this.state = 1080;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 205:
				case 214:
				case 217:
					{
					this.state = 1078;
					this.password();
					}
					break;
				case 14:
				case 34:
					{
					this.state = 1079;
					this.parameter();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1082;
				this.match(CypherParser.ALTER);
				this.state = 1083;
				this.match(CypherParser.SP);
				this.state = 1084;
				this.match(CypherParser.USER);
				this.state = 1085;
				this.match(CypherParser.SP);
				this.state = 1086;
				this.user();
				this.state = 1087;
				this.match(CypherParser.SP);
				this.state = 1088;
				this.setPassword();
				this.state = 1091;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 1089;
					this.match(CypherParser.SP);
					this.state = 1090;
					this.setStatus();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1093;
				this.match(CypherParser.ALTER);
				this.state = 1094;
				this.match(CypherParser.SP);
				this.state = 1095;
				this.match(CypherParser.USER);
				this.state = 1096;
				this.match(CypherParser.SP);
				this.state = 1097;
				this.user();
				this.state = 1098;
				this.match(CypherParser.SP);
				this.state = 1099;
				this.setStatus();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showPrivileges(): ShowPrivilegesContext {
		let localctx: ShowPrivilegesContext = new ShowPrivilegesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, CypherParser.RULE_showPrivileges);
		let _la: number;
		try {
			this.state = 1130;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1103;
				this.match(CypherParser.SHOW);
				this.state = 1104;
				this.match(CypherParser.SP);
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===61) {
					{
					this.state = 1105;
					this.match(CypherParser.ALL);
					this.state = 1106;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1109;
				this.match(CypherParser.PRIVILEGES);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1110;
				this.match(CypherParser.SHOW);
				this.state = 1111;
				this.match(CypherParser.SP);
				this.state = 1117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===143) {
					{
					this.state = 1112;
					this.match(CypherParser.ROLE);
					this.state = 1113;
					this.match(CypherParser.SP);
					this.state = 1114;
					this.symbolicName();
					this.state = 1115;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1119;
				this.match(CypherParser.PRIVILEGES);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1120;
				this.match(CypherParser.SHOW);
				this.state = 1121;
				this.match(CypherParser.SP);
				this.state = 1127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===145) {
					{
					this.state = 1122;
					this.match(CypherParser.USER);
					this.state = 1123;
					this.match(CypherParser.SP);
					this.state = 1124;
					this.user();
					this.state = 1125;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1129;
				this.match(CypherParser.PRIVILEGES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public grantPrivilege(): GrantPrivilegeContext {
		let localctx: GrantPrivilegeContext = new GrantPrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, CypherParser.RULE_grantPrivilege);
		try {
			this.state = 1177;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1132;
				this.match(CypherParser.GRANT);
				this.state = 1133;
				this.match(CypherParser.SP);
				this.state = 1134;
				this.match(CypherParser.ROLE);
				this.state = 1135;
				this.match(CypherParser.SP);
				this.state = 1136;
				this.roles();
				this.state = 1137;
				this.match(CypherParser.SP);
				this.state = 1138;
				this.match(CypherParser.TO);
				this.state = 1139;
				this.match(CypherParser.SP);
				this.state = 1140;
				this.user();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1142;
				this.match(CypherParser.GRANT);
				this.state = 1143;
				this.match(CypherParser.SP);
				this.state = 1144;
				this.datasbasePrivilege();
				this.state = 1145;
				this.match(CypherParser.SP);
				this.state = 1146;
				this.match(CypherParser.ON);
				this.state = 1147;
				this.match(CypherParser.SP);
				this.state = 1148;
				this.databaseScope();
				this.state = 1149;
				this.match(CypherParser.SP);
				this.state = 1150;
				this.match(CypherParser.TO);
				this.state = 1151;
				this.roles();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1153;
				this.match(CypherParser.GRANT);
				this.state = 1154;
				this.match(CypherParser.SP);
				this.state = 1155;
				this.grantableGraphPrivileges();
				this.state = 1156;
				this.match(CypherParser.SP);
				this.state = 1157;
				this.match(CypherParser.ON);
				this.state = 1158;
				this.match(CypherParser.SP);
				this.state = 1159;
				this.graphScope();
				this.state = 1160;
				this.match(CypherParser.SP);
				this.state = 1161;
				this.elementScope();
				this.state = 1162;
				this.match(CypherParser.SP);
				this.state = 1163;
				this.match(CypherParser.TO);
				this.state = 1164;
				this.roles();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1166;
				this.match(CypherParser.GRANT);
				this.state = 1167;
				this.match(CypherParser.SP);
				this.state = 1168;
				this.dbmsPrivilege();
				this.state = 1169;
				this.match(CypherParser.SP);
				this.state = 1170;
				this.match(CypherParser.ON);
				this.state = 1171;
				this.match(CypherParser.SP);
				this.state = 1172;
				this.match(CypherParser.DBMS);
				this.state = 1173;
				this.match(CypherParser.SP);
				this.state = 1174;
				this.match(CypherParser.TO);
				this.state = 1175;
				this.roles();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public denyPrivilege(): DenyPrivilegeContext {
		let localctx: DenyPrivilegeContext = new DenyPrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, CypherParser.RULE_denyPrivilege);
		try {
			this.state = 1224;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1179;
				this.match(CypherParser.DENY);
				this.state = 1180;
				this.match(CypherParser.SP);
				this.state = 1181;
				this.match(CypherParser.ROLE);
				this.state = 1182;
				this.match(CypherParser.SP);
				this.state = 1183;
				this.roles();
				this.state = 1184;
				this.match(CypherParser.SP);
				this.state = 1185;
				this.match(CypherParser.TO);
				this.state = 1186;
				this.match(CypherParser.SP);
				this.state = 1187;
				this.user();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1189;
				this.match(CypherParser.DENY);
				this.state = 1190;
				this.match(CypherParser.SP);
				this.state = 1191;
				this.datasbasePrivilege();
				this.state = 1192;
				this.match(CypherParser.SP);
				this.state = 1193;
				this.match(CypherParser.ON);
				this.state = 1194;
				this.match(CypherParser.SP);
				this.state = 1195;
				this.databaseScope();
				this.state = 1196;
				this.match(CypherParser.SP);
				this.state = 1197;
				this.match(CypherParser.TO);
				this.state = 1198;
				this.roles();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1200;
				this.match(CypherParser.DENY);
				this.state = 1201;
				this.match(CypherParser.SP);
				this.state = 1202;
				this.grantableGraphPrivileges();
				this.state = 1203;
				this.match(CypherParser.SP);
				this.state = 1204;
				this.match(CypherParser.ON);
				this.state = 1205;
				this.match(CypherParser.SP);
				this.state = 1206;
				this.graphScope();
				this.state = 1207;
				this.match(CypherParser.SP);
				this.state = 1208;
				this.elementScope();
				this.state = 1209;
				this.match(CypherParser.SP);
				this.state = 1210;
				this.match(CypherParser.TO);
				this.state = 1211;
				this.roles();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1213;
				this.match(CypherParser.DENY);
				this.state = 1214;
				this.match(CypherParser.SP);
				this.state = 1215;
				this.dbmsPrivilege();
				this.state = 1216;
				this.match(CypherParser.SP);
				this.state = 1217;
				this.match(CypherParser.ON);
				this.state = 1218;
				this.match(CypherParser.SP);
				this.state = 1219;
				this.match(CypherParser.DBMS);
				this.state = 1220;
				this.match(CypherParser.SP);
				this.state = 1221;
				this.match(CypherParser.TO);
				this.state = 1222;
				this.roles();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revokePrivilege(): RevokePrivilegeContext {
		let localctx: RevokePrivilegeContext = new RevokePrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, CypherParser.RULE_revokePrivilege);
		let _la: number;
		try {
			this.state = 1247;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1226;
				this.match(CypherParser.REVOKE);
				this.state = 1227;
				this.match(CypherParser.SP);
				this.state = 1228;
				this.match(CypherParser.ROLE);
				this.state = 1229;
				this.match(CypherParser.SP);
				this.state = 1230;
				this.roles();
				this.state = 1231;
				this.match(CypherParser.SP);
				this.state = 1232;
				this.match(CypherParser.FROM);
				this.state = 1233;
				this.match(CypherParser.SP);
				this.state = 1234;
				this.user();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1236;
				this.match(CypherParser.REVOKE);
				this.state = 1239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1237;
					this.match(CypherParser.SP);
					this.state = 1238;
					_la = this._input.LA(1);
					if(!(_la===158 || _la===159)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1241;
				this.revokePart();
				this.state = 1242;
				this.match(CypherParser.SP);
				this.state = 1243;
				this.match(CypherParser.FROM);
				this.state = 1244;
				this.match(CypherParser.SP);
				this.state = 1245;
				this.roles();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revokePart(): RevokePartContext {
		let localctx: RevokePartContext = new RevokePartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, CypherParser.RULE_revokePart);
		try {
			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1249;
				this.datasbasePrivilege();
				this.state = 1250;
				this.match(CypherParser.SP);
				this.state = 1251;
				this.match(CypherParser.ON);
				this.state = 1252;
				this.match(CypherParser.SP);
				this.state = 1253;
				this.databaseScope();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1255;
				this.revokeableGraphPrivileges();
				this.state = 1256;
				this.match(CypherParser.SP);
				this.state = 1257;
				this.match(CypherParser.ON);
				this.state = 1258;
				this.match(CypherParser.SP);
				this.state = 1259;
				this.graphScope();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1261;
				this.dbmsPrivilege();
				this.state = 1262;
				this.match(CypherParser.SP);
				this.state = 1263;
				this.match(CypherParser.ON);
				this.state = 1264;
				this.match(CypherParser.SP);
				this.state = 1265;
				this.match(CypherParser.DBMS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public databaseScope(): DatabaseScopeContext {
		let localctx: DatabaseScopeContext = new DatabaseScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, CypherParser.RULE_databaseScope);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1288;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1269;
				_la = this._input.LA(1);
				if(!(_la===136 || _la===137)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1270;
				this.match(CypherParser.SP);
				this.state = 1271;
				this.match(CypherParser.T__18);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1272;
				_la = this._input.LA(1);
				if(!(_la===136 || _la===137)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1273;
				this.match(CypherParser.SP);
				this.state = 1274;
				this.symbolicName();
				this.state = 1285;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1276;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 1275;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1278;
						this.match(CypherParser.T__14);
						this.state = 1280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 1279;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1282;
						this.symbolicName();
						}
						}
					}
					this.state = 1287;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 107, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public graphScope(): GraphScopeContext {
		let localctx: GraphScopeContext = new GraphScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, CypherParser.RULE_graphScope);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1309;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1290;
				_la = this._input.LA(1);
				if(!(_la===138 || _la===139)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1291;
				this.match(CypherParser.SP);
				this.state = 1292;
				this.match(CypherParser.T__18);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1293;
				_la = this._input.LA(1);
				if(!(_la===138 || _la===139)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1294;
				this.match(CypherParser.SP);
				this.state = 1295;
				this.symbolicName();
				this.state = 1306;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1297;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 1296;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1299;
						this.match(CypherParser.T__14);
						this.state = 1301;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 1300;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1303;
						this.symbolicName();
						}
						}
					}
					this.state = 1308;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 111, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public roles(): RolesContext {
		let localctx: RolesContext = new RolesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, CypherParser.RULE_roles);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1311;
			this.symbolicName();
			this.state = 1322;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 1312;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1315;
					this.match(CypherParser.T__14);
					this.state = 1317;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 1316;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1319;
					this.symbolicName();
					}
					}
				}
				this.state = 1324;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public grantableGraphPrivileges(): GrantableGraphPrivilegesContext {
		let localctx: GrantableGraphPrivilegesContext = new GrantableGraphPrivilegesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, CypherParser.RULE_grantableGraphPrivileges);
		let _la: number;
		try {
			this.state = 1335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 167:
			case 168:
			case 169:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1325;
				this.revokeableGraphPrivileges();
				}
				break;
			case 79:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1326;
				this.match(CypherParser.MATCH);
				this.state = 1327;
				this.match(CypherParser.SP);
				this.state = 1328;
				this.match(CypherParser.T__13);
				this.state = 1330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1329;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1332;
				this.propertiesList();
				this.state = 1333;
				this.match(CypherParser.T__15);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public revokeableGraphPrivileges(): RevokeableGraphPrivilegesContext {
		let localctx: RevokeableGraphPrivilegesContext = new RevokeableGraphPrivilegesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, CypherParser.RULE_revokeableGraphPrivileges);
		let _la: number;
		try {
			this.state = 1348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 167:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1337;
				this.match(CypherParser.TRAVERSE);
				}
				break;
			case 168:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1338;
				this.match(CypherParser.READ);
				this.state = 1339;
				this.match(CypherParser.SP);
				this.state = 1340;
				this.match(CypherParser.T__13);
				this.state = 1342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1341;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1344;
				this.propertiesList();
				this.state = 1345;
				this.match(CypherParser.T__15);
				}
				break;
			case 169:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1347;
				this.match(CypherParser.WRITE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datasbasePrivilege(): DatasbasePrivilegeContext {
		let localctx: DatasbasePrivilegeContext = new DatasbasePrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, CypherParser.RULE_datasbasePrivilege);
		let _la: number;
		try {
			this.state = 1412;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1350;
				this.match(CypherParser.ACCESS);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1351;
				this.match(CypherParser.START);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1352;
				this.match(CypherParser.STOP);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1353;
				this.match(CypherParser.CREATE);
				this.state = 1354;
				this.match(CypherParser.SP);
				this.state = 1355;
				_la = this._input.LA(1);
				if(!(_la===64 || _la===171)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1356;
				this.match(CypherParser.DROP);
				this.state = 1357;
				this.match(CypherParser.SP);
				this.state = 1358;
				_la = this._input.LA(1);
				if(!(_la===64 || _la===171)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1359;
				_la = this._input.LA(1);
				if(!(_la===64 || _la===171)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1360;
				this.match(CypherParser.SP);
				this.state = 1361;
				this.match(CypherParser.MANAGEMENT);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1362;
				this.match(CypherParser.CREATE);
				this.state = 1363;
				this.match(CypherParser.SP);
				this.state = 1364;
				_la = this._input.LA(1);
				if(!(_la===66 || _la===181)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1365;
				this.match(CypherParser.DROP);
				this.state = 1366;
				this.match(CypherParser.SP);
				this.state = 1367;
				_la = this._input.LA(1);
				if(!(_la===66 || _la===181)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1368;
				_la = this._input.LA(1);
				if(!(_la===66 || _la===181)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1369;
				this.match(CypherParser.SP);
				this.state = 1370;
				this.match(CypherParser.MANAGEMENT);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1371;
				this.match(CypherParser.CREATE);
				this.state = 1372;
				this.match(CypherParser.SP);
				this.state = 1373;
				this.match(CypherParser.NEW);
				this.state = 1374;
				this.match(CypherParser.SP);
				this.state = 1377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===101) {
					{
					this.state = 1375;
					this.match(CypherParser.NODE);
					this.state = 1376;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1379;
				_la = this._input.LA(1);
				if(!(_la===174 || _la===175)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1380;
				this.match(CypherParser.CREATE);
				this.state = 1381;
				this.match(CypherParser.SP);
				this.state = 1382;
				this.match(CypherParser.NEW);
				this.state = 1383;
				this.match(CypherParser.SP);
				this.state = 1386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 1384;
					this.match(CypherParser.RELATIONSHIP);
					this.state = 1385;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1388;
				_la = this._input.LA(1);
				if(!(_la===178 || _la===179)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1389;
				this.match(CypherParser.CREATE);
				this.state = 1390;
				this.match(CypherParser.SP);
				this.state = 1391;
				this.match(CypherParser.NEW);
				this.state = 1392;
				this.match(CypherParser.SP);
				this.state = 1395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===180) {
					{
					this.state = 1393;
					this.match(CypherParser.PROPERTY);
					this.state = 1394;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1397;
				_la = this._input.LA(1);
				if(!(_la===176 || _la===177)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1398;
				this.match(CypherParser.NAME);
				this.state = 1401;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 1399;
					this.match(CypherParser.SP);
					this.state = 1400;
					this.match(CypherParser.MANAGEMENT);
					}
					break;
				}
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1403;
				this.match(CypherParser.ALL);
				this.state = 1410;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1404;
					this.match(CypherParser.SP);
					this.state = 1407;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===136) {
						{
						this.state = 1405;
						this.match(CypherParser.DATABASE);
						this.state = 1406;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1409;
					this.match(CypherParser.PRIVILEGES);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dbmsPrivilege(): DbmsPrivilegeContext {
		let localctx: DbmsPrivilegeContext = new DbmsPrivilegeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, CypherParser.RULE_dbmsPrivilege);
		try {
			this.state = 1432;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 143:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1414;
				this.match(CypherParser.ROLE);
				this.state = 1415;
				this.match(CypherParser.SP);
				this.state = 1416;
				this.match(CypherParser.MANAGEMENT);
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1417;
				this.match(CypherParser.CREATE);
				this.state = 1418;
				this.match(CypherParser.SP);
				this.state = 1419;
				this.match(CypherParser.ROLE);
				}
				break;
			case 63:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1420;
				this.match(CypherParser.DROP);
				this.state = 1421;
				this.match(CypherParser.SP);
				this.state = 1422;
				this.match(CypherParser.ROLE);
				}
				break;
			case 182:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1423;
				this.match(CypherParser.ASSIGN);
				this.state = 1424;
				this.match(CypherParser.SP);
				this.state = 1425;
				this.match(CypherParser.ROLE);
				}
				break;
			case 85:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1426;
				this.match(CypherParser.REMOVE);
				this.state = 1427;
				this.match(CypherParser.SP);
				this.state = 1428;
				this.match(CypherParser.ROLE);
				}
				break;
			case 133:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1429;
				this.match(CypherParser.SHOW);
				this.state = 1430;
				this.match(CypherParser.SP);
				this.state = 1431;
				this.match(CypherParser.ROLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementScope(): ElementScopeContext {
		let localctx: ElementScopeContext = new ElementScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, CypherParser.RULE_elementScope);
		let _la: number;
		try {
			this.state = 1455;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 102:
			case 161:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1434;
				_la = this._input.LA(1);
				if(!(_la===102 || _la===161)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1435;
				this.match(CypherParser.SP);
				this.state = 1436;
				this.propertiesList();
				this.state = 1439;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 1437;
					this.match(CypherParser.SP);
					this.state = 1438;
					this.propertyScope();
					}
					break;
				}
				}
				break;
			case 101:
			case 162:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1441;
				_la = this._input.LA(1);
				if(!(_la===101 || _la===162)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1442;
				this.match(CypherParser.SP);
				this.state = 1443;
				this.propertiesList();
				this.state = 1446;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1444;
					this.match(CypherParser.SP);
					this.state = 1445;
					this.propertyScope();
					}
					break;
				}
				}
				break;
			case 163:
			case 164:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1448;
				_la = this._input.LA(1);
				if(!(_la===163 || _la===164)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1449;
				this.match(CypherParser.SP);
				this.state = 1450;
				this.propertiesList();
				this.state = 1453;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 1451;
					this.match(CypherParser.SP);
					this.state = 1452;
					this.propertyScope();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertiesList(): PropertiesListContext {
		let localctx: PropertiesListContext = new PropertiesListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, CypherParser.RULE_propertiesList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1457;
				this.match(CypherParser.T__18);
				}
				break;
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 205:
			case 214:
			case 217:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1458;
				this.symbolicName();
				this.state = 1469;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1460;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 1459;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1462;
						this.match(CypherParser.T__14);
						this.state = 1464;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 1463;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1466;
						this.symbolicName();
						}
						}
					}
					this.state = 1471;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 134, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyScope(): PropertyScopeContext {
		let localctx: PropertyScopeContext = new PropertyScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, CypherParser.RULE_propertyScope);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1474;
			this.match(CypherParser.T__19);
			this.state = 1476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1475;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1478;
			this.match(CypherParser.T__18);
			this.state = 1480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1479;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1482;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public showDatabase(): ShowDatabaseContext {
		let localctx: ShowDatabaseContext = new ShowDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, CypherParser.RULE_showDatabase);
		let _la: number;
		try {
			this.state = 1494;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1484;
				this.match(CypherParser.SHOW);
				this.state = 1485;
				this.match(CypherParser.SP);
				this.state = 1488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===134) {
					{
					this.state = 1486;
					this.match(CypherParser.DEFAULT);
					this.state = 1487;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1490;
				this.match(CypherParser.DATABASE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1491;
				this.match(CypherParser.SHOW);
				this.state = 1492;
				this.match(CypherParser.SP);
				this.state = 1493;
				this.match(CypherParser.DATABASES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createDatabase(): CreateDatabaseContext {
		let localctx: CreateDatabaseContext = new CreateDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, CypherParser.RULE_createDatabase);
		let _la: number;
		try {
			this.state = 1515;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1496;
				this.match(CypherParser.CREATE);
				this.state = 1497;
				this.match(CypherParser.SP);
				this.state = 1498;
				this.match(CypherParser.DATABASE);
				this.state = 1499;
				this.match(CypherParser.SP);
				this.state = 1500;
				this.symbolicName();
				this.state = 1503;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
				case 1:
					{
					this.state = 1501;
					this.match(CypherParser.SP);
					this.state = 1502;
					this.ifNotExists();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1505;
				this.match(CypherParser.CREATE);
				this.state = 1506;
				this.match(CypherParser.SP);
				this.state = 1510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 1507;
					this.orReplace();
					this.state = 1508;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1512;
				this.match(CypherParser.DATABASE);
				this.state = 1513;
				this.match(CypherParser.SP);
				this.state = 1514;
				this.symbolicName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropDatabase(): DropDatabaseContext {
		let localctx: DropDatabaseContext = new DropDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, CypherParser.RULE_dropDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1517;
			this.match(CypherParser.DROP);
			this.state = 1518;
			this.match(CypherParser.SP);
			this.state = 1519;
			this.match(CypherParser.DATABASE);
			this.state = 1520;
			this.match(CypherParser.SP);
			this.state = 1521;
			this.symbolicName();
			this.state = 1524;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1522;
				this.match(CypherParser.SP);
				this.state = 1523;
				this.ifExists();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public startDatabase(): StartDatabaseContext {
		let localctx: StartDatabaseContext = new StartDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, CypherParser.RULE_startDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1526;
			this.match(CypherParser.START);
			this.state = 1527;
			this.match(CypherParser.SP);
			this.state = 1528;
			this.match(CypherParser.DATABASE);
			this.state = 1529;
			this.match(CypherParser.SP);
			this.state = 1530;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stopDatabase(): StopDatabaseContext {
		let localctx: StopDatabaseContext = new StopDatabaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, CypherParser.RULE_stopDatabase);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1532;
			this.match(CypherParser.STOP);
			this.state = 1533;
			this.match(CypherParser.SP);
			this.state = 1534;
			this.match(CypherParser.DATABASE);
			this.state = 1535;
			this.match(CypherParser.SP);
			this.state = 1536;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifNotExists(): IfNotExistsContext {
		let localctx: IfNotExistsContext = new IfNotExistsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, CypherParser.RULE_ifNotExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1538;
			this.match(CypherParser.IF);
			this.state = 1539;
			this.match(CypherParser.SP);
			this.state = 1540;
			this.match(CypherParser.NOT);
			this.state = 1541;
			this.match(CypherParser.SP);
			this.state = 1542;
			this.match(CypherParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifExists(): IfExistsContext {
		let localctx: IfExistsContext = new IfExistsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, CypherParser.RULE_ifExists);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1544;
			this.match(CypherParser.IF);
			this.state = 1545;
			this.match(CypherParser.SP);
			this.state = 1546;
			this.match(CypherParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orReplace(): OrReplaceContext {
		let localctx: OrReplaceContext = new OrReplaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, CypherParser.RULE_orReplace);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1548;
			this.match(CypherParser.OR);
			this.state = 1549;
			this.match(CypherParser.SP);
			this.state = 1550;
			this.match(CypherParser.REPLACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setPassword(): SetPasswordContext {
		let localctx: SetPasswordContext = new SetPasswordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, CypherParser.RULE_setPassword);
		try {
			this.state = 1569;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1552;
				this.match(CypherParser.SET);
				this.state = 1553;
				this.match(CypherParser.SP);
				this.state = 1554;
				this.match(CypherParser.PASSWORD);
				this.state = 1555;
				this.match(CypherParser.SP);
				this.state = 1558;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 124:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
				case 190:
				case 191:
				case 192:
				case 193:
				case 194:
				case 195:
				case 196:
				case 197:
				case 198:
				case 205:
				case 214:
				case 217:
					{
					this.state = 1556;
					this.password();
					}
					break;
				case 14:
				case 34:
					{
					this.state = 1557;
					this.parameter();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1562;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1560;
					this.match(CypherParser.SP);
					this.state = 1561;
					this.passwordStatus();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1564;
				this.match(CypherParser.SET);
				this.state = 1565;
				this.match(CypherParser.SP);
				this.state = 1566;
				this.match(CypherParser.PASSWORD);
				this.state = 1567;
				this.match(CypherParser.SP);
				this.state = 1568;
				this.passwordStatus();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public passwordStatus(): PasswordStatusContext {
		let localctx: PasswordStatusContext = new PasswordStatusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, CypherParser.RULE_passwordStatus);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1571;
			this.match(CypherParser.CHANGE);
			this.state = 1572;
			this.match(CypherParser.SP);
			this.state = 1575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===110) {
				{
				this.state = 1573;
				this.match(CypherParser.NOT);
				this.state = 1574;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1577;
			this.match(CypherParser.REQUIRED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setStatus(): SetStatusContext {
		let localctx: SetStatusContext = new SetStatusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, CypherParser.RULE_setStatus);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1579;
			this.match(CypherParser.SET);
			this.state = 1580;
			this.match(CypherParser.SP);
			this.state = 1581;
			this.match(CypherParser.STATUS);
			this.state = 1582;
			this.match(CypherParser.SP);
			this.state = 1583;
			this.userStatus();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public userStatus(): UserStatusContext {
		let localctx: UserStatusContext = new UserStatusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, CypherParser.RULE_userStatus);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1585;
			_la = this._input.LA(1);
			if(!(_la===152 || _la===153)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createUniqueConstraint(): CreateUniqueConstraintContext {
		let localctx: CreateUniqueConstraintContext = new CreateUniqueConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, CypherParser.RULE_createUniqueConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1587;
			this.match(CypherParser.CREATE);
			this.state = 1588;
			this.match(CypherParser.SP);
			this.state = 1589;
			this.uniqueConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createNodeKeyConstraint(): CreateNodeKeyConstraintContext {
		let localctx: CreateNodeKeyConstraintContext = new CreateNodeKeyConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, CypherParser.RULE_createNodeKeyConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1591;
			this.match(CypherParser.CREATE);
			this.state = 1592;
			this.match(CypherParser.SP);
			this.state = 1593;
			this.nodeKeyConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createNodePropertyExistenceConstraint(): CreateNodePropertyExistenceConstraintContext {
		let localctx: CreateNodePropertyExistenceConstraintContext = new CreateNodePropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, CypherParser.RULE_createNodePropertyExistenceConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1595;
			this.match(CypherParser.CREATE);
			this.state = 1596;
			this.match(CypherParser.SP);
			this.state = 1597;
			this.nodePropertyExistenceConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createRelationshipPropertyExistenceConstraint(): CreateRelationshipPropertyExistenceConstraintContext {
		let localctx: CreateRelationshipPropertyExistenceConstraintContext = new CreateRelationshipPropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, CypherParser.RULE_createRelationshipPropertyExistenceConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1599;
			this.match(CypherParser.CREATE);
			this.state = 1600;
			this.match(CypherParser.SP);
			this.state = 1601;
			this.relationshipPropertyExistenceConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createIndex(): CreateIndexContext {
		let localctx: CreateIndexContext = new CreateIndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, CypherParser.RULE_createIndex);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1603;
			this.match(CypherParser.CREATE);
			this.state = 1604;
			this.match(CypherParser.SP);
			this.state = 1605;
			this.index();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropUniqueConstraint(): DropUniqueConstraintContext {
		let localctx: DropUniqueConstraintContext = new DropUniqueConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, CypherParser.RULE_dropUniqueConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1607;
			this.match(CypherParser.DROP);
			this.state = 1608;
			this.match(CypherParser.SP);
			this.state = 1609;
			this.uniqueConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropNodeKeyConstraint(): DropNodeKeyConstraintContext {
		let localctx: DropNodeKeyConstraintContext = new DropNodeKeyConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, CypherParser.RULE_dropNodeKeyConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1611;
			this.match(CypherParser.DROP);
			this.state = 1612;
			this.match(CypherParser.SP);
			this.state = 1613;
			this.nodeKeyConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropNodePropertyExistenceConstraint(): DropNodePropertyExistenceConstraintContext {
		let localctx: DropNodePropertyExistenceConstraintContext = new DropNodePropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, CypherParser.RULE_dropNodePropertyExistenceConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1615;
			this.match(CypherParser.DROP);
			this.state = 1616;
			this.match(CypherParser.SP);
			this.state = 1617;
			this.nodePropertyExistenceConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropRelationshipPropertyExistenceConstraint(): DropRelationshipPropertyExistenceConstraintContext {
		let localctx: DropRelationshipPropertyExistenceConstraintContext = new DropRelationshipPropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, CypherParser.RULE_dropRelationshipPropertyExistenceConstraint);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1619;
			this.match(CypherParser.DROP);
			this.state = 1620;
			this.match(CypherParser.SP);
			this.state = 1621;
			this.relationshipPropertyExistenceConstraint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dropIndex(): DropIndexContext {
		let localctx: DropIndexContext = new DropIndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, CypherParser.RULE_dropIndex);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1623;
			this.match(CypherParser.DROP);
			this.state = 1624;
			this.match(CypherParser.SP);
			this.state = 1625;
			this.index();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public index(): IndexContext {
		let localctx: IndexContext = new IndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, CypherParser.RULE_index);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1627;
			this.match(CypherParser.INDEX);
			this.state = 1628;
			this.match(CypherParser.SP);
			this.state = 1629;
			this.match(CypherParser.ON);
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1630;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1633;
			this.nodeLabel();
			this.state = 1635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1634;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1637;
			this.match(CypherParser.T__19);
			this.state = 1639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1638;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1641;
			this.propertyKeys();
			this.state = 1643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1642;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1645;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uniqueConstraint(): UniqueConstraintContext {
		let localctx: UniqueConstraintContext = new UniqueConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, CypherParser.RULE_uniqueConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1647;
			this.match(CypherParser.CONSTRAINT);
			this.state = 1648;
			this.match(CypherParser.SP);
			this.state = 1649;
			this.match(CypherParser.ON);
			this.state = 1651;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1650;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1653;
			this.match(CypherParser.T__19);
			this.state = 1655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1654;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1657;
			this.variable();
			this.state = 1658;
			this.nodeLabel();
			this.state = 1660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1659;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1662;
			this.match(CypherParser.T__20);
			this.state = 1664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1663;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1666;
			this.match(CypherParser.ASSERT);
			this.state = 1667;
			this.match(CypherParser.SP);
			this.state = 1668;
			this.propertyExpression();
			this.state = 1669;
			this.match(CypherParser.SP);
			this.state = 1670;
			this.match(CypherParser.IS);
			this.state = 1671;
			this.match(CypherParser.SP);
			this.state = 1672;
			this.match(CypherParser.UNIQUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeKeyConstraint(): NodeKeyConstraintContext {
		let localctx: NodeKeyConstraintContext = new NodeKeyConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, CypherParser.RULE_nodeKeyConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1674;
			this.match(CypherParser.CONSTRAINT);
			this.state = 1675;
			this.match(CypherParser.SP);
			this.state = 1676;
			this.match(CypherParser.ON);
			this.state = 1678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1677;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1680;
			this.match(CypherParser.T__19);
			this.state = 1682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1681;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1684;
			this.variable();
			this.state = 1685;
			this.nodeLabel();
			this.state = 1687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1686;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1689;
			this.match(CypherParser.T__20);
			this.state = 1691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1690;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1693;
			this.match(CypherParser.ASSERT);
			this.state = 1694;
			this.match(CypherParser.SP);
			this.state = 1695;
			this.match(CypherParser.T__19);
			this.state = 1697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1696;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1699;
			this.propertyExpressions();
			this.state = 1701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1700;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1703;
			this.match(CypherParser.T__20);
			this.state = 1704;
			this.match(CypherParser.SP);
			this.state = 1705;
			this.match(CypherParser.IS);
			this.state = 1706;
			this.match(CypherParser.SP);
			this.state = 1707;
			this.match(CypherParser.NODE);
			this.state = 1708;
			this.match(CypherParser.SP);
			this.state = 1709;
			this.match(CypherParser.KEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodePropertyExistenceConstraint(): NodePropertyExistenceConstraintContext {
		let localctx: NodePropertyExistenceConstraintContext = new NodePropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, CypherParser.RULE_nodePropertyExistenceConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1711;
			this.match(CypherParser.CONSTRAINT);
			this.state = 1712;
			this.match(CypherParser.SP);
			this.state = 1713;
			this.match(CypherParser.ON);
			this.state = 1715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1714;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1717;
			this.match(CypherParser.T__19);
			this.state = 1718;
			this.variable();
			this.state = 1719;
			this.nodeLabel();
			this.state = 1720;
			this.match(CypherParser.T__20);
			this.state = 1722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1721;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1724;
			this.match(CypherParser.ASSERT);
			this.state = 1725;
			this.match(CypherParser.SP);
			this.state = 1726;
			this.match(CypherParser.EXISTS);
			this.state = 1728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1727;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1730;
			this.match(CypherParser.T__19);
			this.state = 1731;
			this.propertyExpression();
			this.state = 1732;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPropertyExistenceConstraint(): RelationshipPropertyExistenceConstraintContext {
		let localctx: RelationshipPropertyExistenceConstraintContext = new RelationshipPropertyExistenceConstraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, CypherParser.RULE_relationshipPropertyExistenceConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1734;
			this.match(CypherParser.CONSTRAINT);
			this.state = 1735;
			this.match(CypherParser.SP);
			this.state = 1736;
			this.match(CypherParser.ON);
			this.state = 1738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1737;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1740;
			this.relationshipPatternSyntax();
			this.state = 1742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1741;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1744;
			this.match(CypherParser.ASSERT);
			this.state = 1745;
			this.match(CypherParser.SP);
			this.state = 1746;
			this.match(CypherParser.EXISTS);
			this.state = 1748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1747;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1750;
			this.match(CypherParser.T__19);
			this.state = 1751;
			this.propertyExpression();
			this.state = 1752;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPatternSyntax(): RelationshipPatternSyntaxContext {
		let localctx: RelationshipPatternSyntaxContext = new RelationshipPatternSyntaxContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, CypherParser.RULE_relationshipPatternSyntax);
		let _la: number;
		try {
			this.state = 1807;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1754;
				this.match(CypherParser.T__19);
				this.state = 1756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1755;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1758;
				this.match(CypherParser.T__20);
				this.state = 1759;
				this.dash();
				this.state = 1760;
				this.match(CypherParser.T__16);
				this.state = 1761;
				this.variable();
				this.state = 1762;
				this.relType();
				this.state = 1763;
				this.match(CypherParser.T__17);
				this.state = 1764;
				this.dash();
				this.state = 1765;
				this.match(CypherParser.T__19);
				this.state = 1767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1766;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1769;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1771;
				this.match(CypherParser.T__19);
				this.state = 1773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1772;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1775;
				this.match(CypherParser.T__20);
				this.state = 1776;
				this.dash();
				this.state = 1777;
				this.match(CypherParser.T__16);
				this.state = 1778;
				this.variable();
				this.state = 1779;
				this.relType();
				this.state = 1780;
				this.match(CypherParser.T__17);
				this.state = 1781;
				this.dash();
				this.state = 1782;
				this.rightArrowHead();
				this.state = 1783;
				this.match(CypherParser.T__19);
				this.state = 1785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1784;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1787;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1789;
				this.match(CypherParser.T__19);
				this.state = 1791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1790;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1793;
				this.match(CypherParser.T__20);
				this.state = 1794;
				this.leftArrowHead();
				this.state = 1795;
				this.dash();
				this.state = 1796;
				this.match(CypherParser.T__16);
				this.state = 1797;
				this.variable();
				this.state = 1798;
				this.relType();
				this.state = 1799;
				this.match(CypherParser.T__17);
				this.state = 1800;
				this.dash();
				this.state = 1801;
				this.match(CypherParser.T__19);
				this.state = 1803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1802;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1805;
				this.match(CypherParser.T__20);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loadCSVClause(): LoadCSVClauseContext {
		let localctx: LoadCSVClauseContext = new LoadCSVClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, CypherParser.RULE_loadCSVClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1809;
			this.match(CypherParser.LOAD);
			this.state = 1810;
			this.match(CypherParser.SP);
			this.state = 1811;
			this.match(CypherParser.CSV);
			this.state = 1812;
			this.match(CypherParser.SP);
			this.state = 1817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 1813;
				this.match(CypherParser.WITH);
				this.state = 1814;
				this.match(CypherParser.SP);
				this.state = 1815;
				this.match(CypherParser.HEADERS);
				this.state = 1816;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1819;
			this.match(CypherParser.FROM);
			this.state = 1820;
			this.match(CypherParser.SP);
			this.state = 1821;
			this.expression();
			this.state = 1822;
			this.match(CypherParser.SP);
			this.state = 1823;
			this.match(CypherParser.AS);
			this.state = 1824;
			this.match(CypherParser.SP);
			this.state = 1825;
			this.variable();
			this.state = 1826;
			this.match(CypherParser.SP);
			this.state = 1830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===77) {
				{
				this.state = 1827;
				this.match(CypherParser.FIELDTERMINATOR);
				this.state = 1828;
				this.match(CypherParser.SP);
				this.state = 1829;
				this.match(CypherParser.StringLiteral);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public matchClause(): MatchClauseContext {
		let localctx: MatchClauseContext = new MatchClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, CypherParser.RULE_matchClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===78) {
				{
				this.state = 1832;
				this.match(CypherParser.OPTIONAL);
				this.state = 1833;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1836;
			this.match(CypherParser.MATCH);
			this.state = 1838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1837;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1840;
			this.pattern();
			this.state = 1844;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1841;
					this.hint();
					}
					}
				}
				this.state = 1846;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
			}
			this.state = 1851;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1847;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1850;
				this.where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unwindClause(): UnwindClauseContext {
		let localctx: UnwindClauseContext = new UnwindClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, CypherParser.RULE_unwindClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1853;
			this.match(CypherParser.UNWIND);
			this.state = 1855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1854;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1857;
			this.expression();
			this.state = 1858;
			this.match(CypherParser.SP);
			this.state = 1859;
			this.match(CypherParser.AS);
			this.state = 1860;
			this.match(CypherParser.SP);
			this.state = 1861;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mergeClause(): MergeClauseContext {
		let localctx: MergeClauseContext = new MergeClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, CypherParser.RULE_mergeClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1863;
			this.match(CypherParser.MERGE);
			this.state = 1865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1864;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1867;
			this.patternPart();
			this.state = 1872;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1868;
					this.match(CypherParser.SP);
					this.state = 1869;
					this.mergeAction();
					}
					}
				}
				this.state = 1874;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mergeAction(): MergeActionContext {
		let localctx: MergeActionContext = new MergeActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, CypherParser.RULE_mergeAction);
		try {
			this.state = 1885;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1875;
				this.match(CypherParser.ON);
				this.state = 1876;
				this.match(CypherParser.SP);
				this.state = 1877;
				this.match(CypherParser.MATCH);
				this.state = 1878;
				this.match(CypherParser.SP);
				this.state = 1879;
				this.setClause();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1880;
				this.match(CypherParser.ON);
				this.state = 1881;
				this.match(CypherParser.SP);
				this.state = 1882;
				this.match(CypherParser.CREATE);
				this.state = 1883;
				this.match(CypherParser.SP);
				this.state = 1884;
				this.setClause();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createClause(): CreateClauseContext {
		let localctx: CreateClauseContext = new CreateClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, CypherParser.RULE_createClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1887;
			this.match(CypherParser.CREATE);
			this.state = 1889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1888;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1891;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public createUniqueClause(): CreateUniqueClauseContext {
		let localctx: CreateUniqueClauseContext = new CreateUniqueClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, CypherParser.RULE_createUniqueClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1893;
			this.match(CypherParser.CREATE);
			this.state = 1894;
			this.match(CypherParser.SP);
			this.state = 1895;
			this.match(CypherParser.UNIQUE);
			this.state = 1897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1896;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1899;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setClause(): SetClauseContext {
		let localctx: SetClauseContext = new SetClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, CypherParser.RULE_setClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1901;
			this.match(CypherParser.SET);
			this.state = 1903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1902;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1905;
			this.setItem();
			this.state = 1916;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1907;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 1906;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1909;
					this.match(CypherParser.T__14);
					this.state = 1911;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 1910;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1913;
					this.setItem();
					}
					}
				}
				this.state = 1918;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setItem(): SetItemContext {
		let localctx: SetItemContext = new SetItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, CypherParser.RULE_setItem);
		let _la: number;
		try {
			this.state = 1955;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1919;
				this.propertyExpression();
				this.state = 1921;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1920;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1923;
				this.match(CypherParser.T__11);
				this.state = 1925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1924;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1927;
				this.expression();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1929;
				this.variable();
				this.state = 1931;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1930;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1933;
				this.match(CypherParser.T__11);
				this.state = 1935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1934;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1937;
				this.expression();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1939;
				this.variable();
				this.state = 1941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1940;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1943;
				this.match(CypherParser.T__21);
				this.state = 1945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1944;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1947;
				this.expression();
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 1949;
				this.variable();
				this.state = 1951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 1950;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1953;
				this.nodeLabels();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public deleteClause(): DeleteClauseContext {
		let localctx: DeleteClauseContext = new DeleteClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, CypherParser.RULE_deleteClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===83) {
				{
				this.state = 1957;
				this.match(CypherParser.DETACH);
				this.state = 1958;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1961;
			this.match(CypherParser.DELETE);
			this.state = 1963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 1962;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1965;
			this.expression();
			this.state = 1976;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 204, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1967;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 1966;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1969;
					this.match(CypherParser.T__14);
					this.state = 1971;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 1970;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1973;
					this.expression();
					}
					}
				}
				this.state = 1978;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 204, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public removeClause(): RemoveClauseContext {
		let localctx: RemoveClauseContext = new RemoveClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, CypherParser.RULE_removeClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1979;
			this.match(CypherParser.REMOVE);
			this.state = 1980;
			this.match(CypherParser.SP);
			this.state = 1981;
			this.removeItem();
			this.state = 1992;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1983;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 1982;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1985;
					this.match(CypherParser.T__14);
					this.state = 1987;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 1986;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1989;
					this.removeItem();
					}
					}
				}
				this.state = 1994;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 207, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public removeItem(): RemoveItemContext {
		let localctx: RemoveItemContext = new RemoveItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, CypherParser.RULE_removeItem);
		try {
			this.state = 1999;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1995;
				this.variable();
				this.state = 1996;
				this.nodeLabels();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1998;
				this.propertyExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public foreachClause(): ForeachClauseContext {
		let localctx: ForeachClauseContext = new ForeachClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, CypherParser.RULE_foreachClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2001;
			this.match(CypherParser.FOREACH);
			this.state = 2003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2002;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2005;
			this.match(CypherParser.T__19);
			this.state = 2007;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2006;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2009;
			this.variable();
			this.state = 2010;
			this.match(CypherParser.SP);
			this.state = 2011;
			this.match(CypherParser.IN);
			this.state = 2012;
			this.match(CypherParser.SP);
			this.state = 2013;
			this.expression();
			this.state = 2015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2014;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2017;
			this.match(CypherParser.T__22);
			this.state = 2020;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2018;
					this.match(CypherParser.SP);
					this.state = 2019;
					this.clause();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2022;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2024;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2027;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let localctx: WithClauseContext = new WithClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, CypherParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2029;
			this.match(CypherParser.WITH);
			this.state = 2034;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
			case 1:
				{
				this.state = 2031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2030;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2033;
				this.match(CypherParser.DISTINCT);
				}
				break;
			}
			this.state = 2036;
			this.match(CypherParser.SP);
			this.state = 2037;
			this.returnBody();
			this.state = 2042;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				{
				this.state = 2039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2038;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2041;
				this.where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnClause(): ReturnClauseContext {
		let localctx: ReturnClauseContext = new ReturnClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, CypherParser.RULE_returnClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2044;
			this.match(CypherParser.RETURN);
			this.state = 2049;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 2046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2045;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2048;
				this.match(CypherParser.DISTINCT);
				}
				break;
			}
			this.state = 2052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2051;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2054;
			this.returnBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnBody(): ReturnBodyContext {
		let localctx: ReturnBodyContext = new ReturnBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, CypherParser.RULE_returnBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2056;
			this.returnItems();
			this.state = 2059;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
			case 1:
				{
				this.state = 2057;
				this.match(CypherParser.SP);
				this.state = 2058;
				this.order();
				}
				break;
			}
			this.state = 2063;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				{
				this.state = 2061;
				this.match(CypherParser.SP);
				this.state = 2062;
				this.skip();
				}
				break;
			}
			this.state = 2067;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				{
				this.state = 2065;
				this.match(CypherParser.SP);
				this.state = 2066;
				this.limit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public func(): FuncContext {
		let localctx: FuncContext = new FuncContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, CypherParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2069;
			this.procedureInvocation();
			this.state = 2071;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				{
				this.state = 2070;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===130) {
				{
				this.state = 2073;
				this.procedureResults();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnItems(): ReturnItemsContext {
		let localctx: ReturnItemsContext = new ReturnItemsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, CypherParser.RULE_returnItems);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2105;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2076;
				this.match(CypherParser.T__18);
				this.state = 2087;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 228, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2078;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2077;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2080;
						this.match(CypherParser.T__14);
						this.state = 2082;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2081;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2084;
						this.returnItem();
						}
						}
					}
					this.state = 2089;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 228, this._ctx);
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2090;
				this.returnItem();
				this.state = 2101;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2092;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2091;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2094;
						this.match(CypherParser.T__14);
						this.state = 2096;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2095;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2098;
						this.returnItem();
						}
						}
					}
					this.state = 2103;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
				}
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2104;
				this.func();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnItem(): ReturnItemContext {
		let localctx: ReturnItemContext = new ReturnItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, CypherParser.RULE_returnItem);
		try {
			this.state = 2114;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2107;
				this.expression();
				this.state = 2108;
				this.match(CypherParser.SP);
				this.state = 2109;
				this.match(CypherParser.AS);
				this.state = 2110;
				this.match(CypherParser.SP);
				this.state = 2111;
				this.variable();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2113;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let localctx: CallContext = new CallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, CypherParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2116;
			this.match(CypherParser.CALL);
			this.state = 2117;
			this.match(CypherParser.SP);
			this.state = 2118;
			this.procedureInvocation();
			this.state = 2120;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				{
				this.state = 2119;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===130) {
				{
				this.state = 2122;
				this.procedureResults();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureInvocation(): ProcedureInvocationContext {
		let localctx: ProcedureInvocationContext = new ProcedureInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, CypherParser.RULE_procedureInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2125;
			this.procedureInvocationBody();
			this.state = 2127;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				{
				this.state = 2126;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 2129;
				this.procedureArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureInvocationBody(): ProcedureInvocationBodyContext {
		let localctx: ProcedureInvocationBodyContext = new ProcedureInvocationBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, CypherParser.RULE_procedureInvocationBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2132;
			this.namespace();
			this.state = 2133;
			this.procedureName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureArguments(): ProcedureArgumentsContext {
		let localctx: ProcedureArgumentsContext = new ProcedureArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, CypherParser.RULE_procedureArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2135;
			this.match(CypherParser.T__19);
			this.state = 2137;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				{
				this.state = 2136;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4293918721) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294967295) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294967295) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4294967295) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4294967295) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 10227519) !== 0)) {
				{
				this.state = 2139;
				this.expression();
				}
			}

			this.state = 2152;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 242, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2142;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2145;
					this.match(CypherParser.T__14);
					this.state = 2147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2146;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2149;
					this.expression();
					}
					}
				}
				this.state = 2154;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 242, this._ctx);
			}
			this.state = 2156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2155;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2158;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureResults(): ProcedureResultsContext {
		let localctx: ProcedureResultsContext = new ProcedureResultsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, CypherParser.RULE_procedureResults);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2160;
			this.match(CypherParser.YIELD);
			this.state = 2161;
			this.match(CypherParser.SP);
			this.state = 2162;
			this.procedureResult();
			this.state = 2173;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2164;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2163;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2166;
					this.match(CypherParser.T__14);
					this.state = 2168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2167;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2170;
					this.procedureResult();
					}
					}
				}
				this.state = 2175;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 246, this._ctx);
			}
			this.state = 2178;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
			case 1:
				{
				this.state = 2176;
				this.match(CypherParser.SP);
				this.state = 2177;
				this.where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureResult(): ProcedureResultContext {
		let localctx: ProcedureResultContext = new ProcedureResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, CypherParser.RULE_procedureResult);
		try {
			this.state = 2182;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 248, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2180;
				this.aliasedProcedureResult();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2181;
				this.simpleProcedureResult();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasedProcedureResult(): AliasedProcedureResultContext {
		let localctx: AliasedProcedureResultContext = new AliasedProcedureResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, CypherParser.RULE_aliasedProcedureResult);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2184;
			this.procedureOutput();
			this.state = 2185;
			this.match(CypherParser.SP);
			this.state = 2186;
			this.match(CypherParser.AS);
			this.state = 2187;
			this.match(CypherParser.SP);
			this.state = 2188;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simpleProcedureResult(): SimpleProcedureResultContext {
		let localctx: SimpleProcedureResultContext = new SimpleProcedureResultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, CypherParser.RULE_simpleProcedureResult);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2190;
			this.procedureOutput();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureOutput(): ProcedureOutputContext {
		let localctx: ProcedureOutputContext = new ProcedureOutputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, CypherParser.RULE_procedureOutput);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2192;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order(): OrderContext {
		let localctx: OrderContext = new OrderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, CypherParser.RULE_order);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2194;
			this.match(CypherParser.ORDER);
			this.state = 2195;
			this.match(CypherParser.SP);
			this.state = 2196;
			this.match(CypherParser.BY);
			this.state = 2197;
			this.match(CypherParser.SP);
			this.state = 2198;
			this.sortItem();
			this.state = 2209;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2199;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2202;
					this.match(CypherParser.T__14);
					this.state = 2204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2203;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2206;
					this.sortItem();
					}
					}
				}
				this.state = 2211;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public skip(): SkipContext {
		let localctx: SkipContext = new SkipContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, CypherParser.RULE_skip);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2212;
			this.match(CypherParser.L_SKIP);
			this.state = 2213;
			this.match(CypherParser.SP);
			this.state = 2214;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limit(): LimitContext {
		let localctx: LimitContext = new LimitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, CypherParser.RULE_limit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2216;
			this.match(CypherParser.LIMIT);
			this.state = 2217;
			this.match(CypherParser.SP);
			this.state = 2218;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sortItem(): SortItemContext {
		let localctx: SortItemContext = new SortItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, CypherParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2220;
			this.expression();
			this.state = 2228;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				{
				this.state = 2222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2221;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2224;
				_la = this._input.LA(1);
				if(!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 15) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2226;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 253, this._ctx) ) {
				case 1:
					{
					this.state = 2225;
					this.match(CypherParser.SP);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hint(): HintContext {
		let localctx: HintContext = new HintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, CypherParser.RULE_hint);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2230;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2279;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				{
				{
				this.state = 2233;
				this.match(CypherParser.USING);
				this.state = 2234;
				this.match(CypherParser.SP);
				this.state = 2235;
				this.match(CypherParser.INDEX);
				this.state = 2236;
				this.match(CypherParser.SP);
				this.state = 2237;
				this.variable();
				this.state = 2238;
				this.nodeLabel();
				this.state = 2240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2239;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2242;
				this.match(CypherParser.T__19);
				this.state = 2244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2243;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2246;
				this.propertyKeys();
				this.state = 2248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2247;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2250;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 2252;
				this.match(CypherParser.USING);
				this.state = 2253;
				this.match(CypherParser.SP);
				this.state = 2254;
				this.match(CypherParser.JOIN);
				this.state = 2255;
				this.match(CypherParser.SP);
				this.state = 2256;
				this.match(CypherParser.ON);
				this.state = 2257;
				this.match(CypherParser.SP);
				this.state = 2258;
				this.variable();
				this.state = 2269;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 261, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2260;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2259;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2262;
						this.match(CypherParser.T__14);
						this.state = 2264;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2263;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2266;
						this.variable();
						}
						}
					}
					this.state = 2271;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 261, this._ctx);
				}
				}
				}
				break;
			case 3:
				{
				{
				this.state = 2272;
				this.match(CypherParser.USING);
				this.state = 2273;
				this.match(CypherParser.SP);
				this.state = 2274;
				this.match(CypherParser.SCAN);
				this.state = 2275;
				this.match(CypherParser.SP);
				this.state = 2276;
				this.variable();
				this.state = 2277;
				this.nodeLabel();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public startClause(): StartClauseContext {
		let localctx: StartClauseContext = new StartClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, CypherParser.RULE_startClause);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2281;
			this.match(CypherParser.START);
			this.state = 2282;
			this.match(CypherParser.SP);
			this.state = 2283;
			this.startPoint();
			this.state = 2294;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 265, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2284;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2287;
					this.match(CypherParser.T__14);
					this.state = 2289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2288;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2291;
					this.startPoint();
					}
					}
				}
				this.state = 2296;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 265, this._ctx);
			}
			this.state = 2298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===104) {
				{
				this.state = 2297;
				this.where();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public startPoint(): StartPointContext {
		let localctx: StartPointContext = new StartPointContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, CypherParser.RULE_startPoint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2300;
			this.variable();
			this.state = 2302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2301;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2304;
			this.match(CypherParser.T__11);
			this.state = 2306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2305;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2308;
			this.lookup();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lookup(): LookupContext {
		let localctx: LookupContext = new LookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, CypherParser.RULE_lookup);
		try {
			this.state = 2312;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 101:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2310;
				this.nodeLookup();
				}
				break;
			case 102:
			case 103:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2311;
				this.relationshipLookup();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeLookup(): NodeLookupContext {
		let localctx: NodeLookupContext = new NodeLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, CypherParser.RULE_nodeLookup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2314;
			this.match(CypherParser.NODE);
			this.state = 2316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2315;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2321;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				{
				this.state = 2318;
				this.identifiedIndexLookup();
				}
				break;
			case 2:
				{
				this.state = 2319;
				this.indexQuery();
				}
				break;
			case 3:
				{
				this.state = 2320;
				this.idLookup();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipLookup(): RelationshipLookupContext {
		let localctx: RelationshipLookupContext = new RelationshipLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, CypherParser.RULE_relationshipLookup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2323;
			_la = this._input.LA(1);
			if(!(_la===102 || _la===103)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 2327;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				{
				this.state = 2324;
				this.identifiedIndexLookup();
				}
				break;
			case 2:
				{
				this.state = 2325;
				this.indexQuery();
				}
				break;
			case 3:
				{
				this.state = 2326;
				this.idLookup();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifiedIndexLookup(): IdentifiedIndexLookupContext {
		let localctx: IdentifiedIndexLookupContext = new IdentifiedIndexLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, CypherParser.RULE_identifiedIndexLookup);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2329;
			this.match(CypherParser.T__1);
			this.state = 2330;
			this.symbolicName();
			this.state = 2331;
			this.match(CypherParser.T__19);
			this.state = 2332;
			this.symbolicName();
			this.state = 2333;
			this.match(CypherParser.T__11);
			this.state = 2336;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 199:
				{
				this.state = 2334;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case 14:
			case 34:
				{
				this.state = 2335;
				this.parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2338;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexQuery(): IndexQueryContext {
		let localctx: IndexQueryContext = new IndexQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, CypherParser.RULE_indexQuery);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2340;
			this.match(CypherParser.T__1);
			this.state = 2341;
			this.symbolicName();
			this.state = 2342;
			this.match(CypherParser.T__19);
			this.state = 2345;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 199:
				{
				this.state = 2343;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case 14:
			case 34:
				{
				this.state = 2344;
				this.parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2347;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public idLookup(): IdLookupContext {
		let localctx: IdLookupContext = new IdLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, CypherParser.RULE_idLookup);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2349;
			this.match(CypherParser.T__19);
			this.state = 2353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 202:
			case 203:
			case 204:
				{
				this.state = 2350;
				this.literalIds();
				}
				break;
			case 14:
			case 34:
				{
				this.state = 2351;
				this.parameter();
				}
				break;
			case 19:
				{
				this.state = 2352;
				this.match(CypherParser.T__18);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2355;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literalIds(): LiteralIdsContext {
		let localctx: LiteralIdsContext = new LiteralIdsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, CypherParser.RULE_literalIds);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2357;
			this.integerLiteral();
			this.state = 2368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15 || _la===218) {
				{
				{
				this.state = 2359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2358;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2361;
				this.match(CypherParser.T__14);
				this.state = 2363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2362;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2365;
				this.integerLiteral();
				}
				}
				this.state = 2370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public where(): WhereContext {
		let localctx: WhereContext = new WhereContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, CypherParser.RULE_where);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2371;
			this.match(CypherParser.WHERE);
			this.state = 2372;
			this.match(CypherParser.SP);
			this.state = 2373;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let localctx: PatternContext = new PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, CypherParser.RULE_pattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2375;
			this.patternPart();
			this.state = 2386;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 281, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2377;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2376;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2379;
					this.match(CypherParser.T__14);
					this.state = 2381;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2380;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2383;
					this.patternPart();
					}
					}
				}
				this.state = 2388;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 281, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternPart(): PatternPartContext {
		let localctx: PatternPartContext = new PatternPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, CypherParser.RULE_patternPart);
		let _la: number;
		try {
			this.state = 2400;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 284, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2389;
				this.variable();
				this.state = 2391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2390;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2393;
				this.match(CypherParser.T__11);
				this.state = 2395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2394;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2397;
				this.anonymousPatternPart();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2399;
				this.anonymousPatternPart();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anonymousPatternPart(): AnonymousPatternPartContext {
		let localctx: AnonymousPatternPartContext = new AnonymousPatternPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, CypherParser.RULE_anonymousPatternPart);
		try {
			this.state = 2404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 105:
			case 106:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2402;
				this.shortestPathPatternFunction();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2403;
				this.patternElement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternElement(): PatternElementContext {
		let localctx: PatternElementContext = new PatternElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, CypherParser.RULE_patternElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2420;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2406;
				this.nodePattern();
				this.state = 2413;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 287, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2408;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2407;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2410;
						this.patternElementChain();
						}
						}
					}
					this.state = 2415;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 287, this._ctx);
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2416;
				this.match(CypherParser.T__19);
				this.state = 2417;
				this.patternElement();
				this.state = 2418;
				this.match(CypherParser.T__20);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodePattern(): NodePatternContext {
		let localctx: NodePatternContext = new NodePatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, CypherParser.RULE_nodePattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2422;
			this.match(CypherParser.T__19);
			this.state = 2424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2423;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4294967295) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967295) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 4294967295) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 8519679) !== 0) || _la===214 || _la===217) {
				{
				this.state = 2426;
				this.variable();
				this.state = 2428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2427;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 2432;
				this.nodeLabels();
				this.state = 2434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2433;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===34) {
				{
				this.state = 2438;
				this.properties();
				this.state = 2440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2439;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2444;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternElementChain(): PatternElementChainContext {
		let localctx: PatternElementChainContext = new PatternElementChainContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, CypherParser.RULE_patternElementChain);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2446;
			this.relationshipPattern();
			this.state = 2448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2447;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2450;
			this.nodePattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPattern(): RelationshipPatternContext {
		let localctx: RelationshipPatternContext = new RelationshipPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, CypherParser.RULE_relationshipPattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2452;
			this.relationshipPatternStart();
			this.state = 2454;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 297, this._ctx) ) {
			case 1:
				{
				this.state = 2453;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 2457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 2456;
				this.relationshipDetail();
				}
			}

			this.state = 2460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2459;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2462;
			this.relationshipPatternEnd();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPatternStart(): RelationshipPatternStartContext {
		let localctx: RelationshipPatternStartContext = new RelationshipPatternStartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, CypherParser.RULE_relationshipPatternStart);
		let _la: number;
		try {
			this.state = 2471;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 35:
			case 36:
			case 37:
			case 38:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2464;
				this.leftArrowHead();
				this.state = 2466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2465;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2468;
				this.dash();
				}
				}
				break;
			case 3:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2470;
				this.dash();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipPatternEnd(): RelationshipPatternEndContext {
		let localctx: RelationshipPatternEndContext = new RelationshipPatternEndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, CypherParser.RULE_relationshipPatternEnd);
		let _la: number;
		try {
			this.state = 2480;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 303, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2473;
				this.dash();
				this.state = 2475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2474;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2477;
				this.rightArrowHead();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2479;
				this.dash();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipDetail(): RelationshipDetailContext {
		let localctx: RelationshipDetailContext = new RelationshipDetailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, CypherParser.RULE_relationshipDetail);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2482;
			this.match(CypherParser.T__16);
			this.state = 2484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2483;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4294967295) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967295) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 4294967295) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 8519679) !== 0) || _la===214 || _la===217) {
				{
				this.state = 2486;
				this.variable();
				this.state = 2488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2487;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 2492;
				this.relationshipTypes();
				this.state = 2494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2493;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 2498;
				this.rangeLiteral();
				}
			}

			this.state = 2505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14 || _la===34) {
				{
				this.state = 2501;
				this.properties();
				this.state = 2503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2502;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2507;
			this.match(CypherParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public properties(): PropertiesContext {
		let localctx: PropertiesContext = new PropertiesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, CypherParser.RULE_properties);
		try {
			this.state = 2511;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 312, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2509;
				this.mapLiteral();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2510;
				this.parameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relType(): RelTypeContext {
		let localctx: RelTypeContext = new RelTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, CypherParser.RULE_relType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2513;
			this.match(CypherParser.T__1);
			this.state = 2515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2514;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2517;
			this.relTypeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipTypes(): RelationshipTypesContext {
		let localctx: RelationshipTypesContext = new RelationshipTypesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, CypherParser.RULE_relationshipTypes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2519;
			this.relationshipType();
			this.state = 2527;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 315, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2520;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2523;
					this.match(CypherParser.T__22);
					this.state = 2524;
					this.relationshipTypeOptionalColon();
					}
					}
				}
				this.state = 2529;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 315, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipType(): RelationshipTypeContext {
		let localctx: RelationshipTypeContext = new RelationshipTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, CypherParser.RULE_relationshipType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2530;
			this.match(CypherParser.T__1);
			this.state = 2531;
			this.relTypeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipTypeOptionalColon(): RelationshipTypeOptionalColonContext {
		let localctx: RelationshipTypeOptionalColonContext = new RelationshipTypeOptionalColonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 324, CypherParser.RULE_relationshipTypeOptionalColon);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 2533;
				this.match(CypherParser.T__1);
				}
			}

			this.state = 2536;
			this.relTypeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeLabels(): NodeLabelsContext {
		let localctx: NodeLabelsContext = new NodeLabelsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, CypherParser.RULE_nodeLabels);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2538;
			this.nodeLabel();
			this.state = 2545;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 318, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2540;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2539;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2542;
					this.nodeLabel();
					}
					}
				}
				this.state = 2547;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 318, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nodeLabel(): NodeLabelContext {
		let localctx: NodeLabelContext = new NodeLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, CypherParser.RULE_nodeLabel);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2548;
			this.match(CypherParser.T__1);
			this.state = 2549;
			this.labelName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeLiteral(): RangeLiteralContext {
		let localctx: RangeLiteralContext = new RangeLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, CypherParser.RULE_rangeLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2551;
			this.match(CypherParser.T__18);
			this.state = 2553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2552;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 7) !== 0)) {
				{
				this.state = 2555;
				this.integerLiteral();
				this.state = 2557;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2556;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 2571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 2561;
				this.match(CypherParser.T__23);
				this.state = 2563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2562;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 7) !== 0)) {
					{
					this.state = 2565;
					this.integerLiteral();
					this.state = 2567;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2566;
						this.match(CypherParser.SP);
						}
					}

					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelName(): LabelNameContext {
		let localctx: LabelNameContext = new LabelNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, CypherParser.RULE_labelName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2573;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relTypeName(): RelTypeNameContext {
		let localctx: RelTypeNameContext = new RelTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, CypherParser.RULE_relTypeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2575;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, CypherParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2577;
			this.orExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orExpression(): OrExpressionContext {
		let localctx: OrExpressionContext = new OrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, CypherParser.RULE_orExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2579;
			this.xorExpression();
			this.state = 2586;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 326, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2580;
					this.match(CypherParser.SP);
					this.state = 2581;
					this.match(CypherParser.OR);
					this.state = 2582;
					this.match(CypherParser.SP);
					this.state = 2583;
					this.xorExpression();
					}
					}
				}
				this.state = 2588;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 326, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xorExpression(): XorExpressionContext {
		let localctx: XorExpressionContext = new XorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, CypherParser.RULE_xorExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2589;
			this.andExpression();
			this.state = 2596;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 327, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2590;
					this.match(CypherParser.SP);
					this.state = 2591;
					this.match(CypherParser.XOR);
					this.state = 2592;
					this.match(CypherParser.SP);
					this.state = 2593;
					this.andExpression();
					}
					}
				}
				this.state = 2598;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 327, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let localctx: AndExpressionContext = new AndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, CypherParser.RULE_andExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2599;
			this.notExpression();
			this.state = 2606;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 328, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2600;
					this.match(CypherParser.SP);
					this.state = 2601;
					this.match(CypherParser.AND);
					this.state = 2602;
					this.match(CypherParser.SP);
					this.state = 2603;
					this.notExpression();
					}
					}
				}
				this.state = 2608;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 328, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public notExpression(): NotExpressionContext {
		let localctx: NotExpressionContext = new NotExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, CypherParser.RULE_notExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2615;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 330, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2609;
					this.match(CypherParser.NOT);
					this.state = 2611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2610;
						this.match(CypherParser.SP);
						}
					}

					}
					}
				}
				this.state = 2617;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 330, this._ctx);
			}
			this.state = 2618;
			this.comparisonExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonExpression(): ComparisonExpressionContext {
		let localctx: ComparisonExpressionContext = new ComparisonExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, CypherParser.RULE_comparisonExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2620;
			this.addOrSubtractExpression();
			this.state = 2627;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 332, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2622;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2621;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2624;
					this.partialComparisonExpression();
					}
					}
				}
				this.state = 2629;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 332, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addOrSubtractExpression(): AddOrSubtractExpressionContext {
		let localctx: AddOrSubtractExpressionContext = new AddOrSubtractExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, CypherParser.RULE_addOrSubtractExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2630;
			this.multiplyDivideModuloExpression();
			this.state = 2649;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2647;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 337, this._ctx) ) {
					case 1:
						{
						{
						this.state = 2632;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2631;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2634;
						this.match(CypherParser.T__12);
						this.state = 2636;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2635;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2638;
						this.multiplyDivideModuloExpression();
						}
						}
						break;
					case 2:
						{
						{
						this.state = 2640;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2639;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2642;
						this.match(CypherParser.T__2);
						this.state = 2644;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2643;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2646;
						this.multiplyDivideModuloExpression();
						}
						}
						break;
					}
					}
				}
				this.state = 2651;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 338, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplyDivideModuloExpression(): MultiplyDivideModuloExpressionContext {
		let localctx: MultiplyDivideModuloExpressionContext = new MultiplyDivideModuloExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, CypherParser.RULE_multiplyDivideModuloExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2652;
			this.powerOfExpression();
			this.state = 2679;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2677;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 345, this._ctx) ) {
					case 1:
						{
						{
						this.state = 2654;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2653;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2656;
						this.match(CypherParser.T__18);
						this.state = 2658;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2657;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2660;
						this.powerOfExpression();
						}
						}
						break;
					case 2:
						{
						{
						this.state = 2662;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2661;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2664;
						this.match(CypherParser.T__5);
						this.state = 2666;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2665;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2668;
						this.powerOfExpression();
						}
						}
						break;
					case 3:
						{
						{
						this.state = 2670;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2669;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2672;
						this.match(CypherParser.T__24);
						this.state = 2674;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2673;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2676;
						this.powerOfExpression();
						}
						}
						break;
					}
					}
				}
				this.state = 2681;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 346, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public powerOfExpression(): PowerOfExpressionContext {
		let localctx: PowerOfExpressionContext = new PowerOfExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, CypherParser.RULE_powerOfExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2682;
			this.unaryAddOrSubtractExpression();
			this.state = 2693;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 349, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2684;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2683;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2686;
					this.match(CypherParser.T__25);
					this.state = 2688;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2687;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2690;
					this.unaryAddOrSubtractExpression();
					}
					}
				}
				this.state = 2695;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 349, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryAddOrSubtractExpression(): UnaryAddOrSubtractExpressionContext {
		let localctx: UnaryAddOrSubtractExpressionContext = new UnaryAddOrSubtractExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, CypherParser.RULE_unaryAddOrSubtractExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3 || _la===13) {
				{
				{
				this.state = 2696;
				_la = this._input.LA(1);
				if(!(_la===3 || _la===13)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 2698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2697;
					this.match(CypherParser.SP);
					}
				}

				}
				}
				this.state = 2704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2705;
			this.stringListNullOperatorExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringListNullOperatorExpression(): StringListNullOperatorExpressionContext {
		let localctx: StringListNullOperatorExpressionContext = new StringListNullOperatorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, CypherParser.RULE_stringListNullOperatorExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2707;
			this.propertyOrLabelsExpression();
			this.state = 2761;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2759;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 359, this._ctx) ) {
					case 1:
						{
						{
						this.state = 2709;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2708;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2711;
						this.match(CypherParser.T__16);
						this.state = 2712;
						this.expression();
						this.state = 2713;
						this.match(CypherParser.T__17);
						}
						}
						break;
					case 2:
						{
						{
						this.state = 2716;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2715;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2718;
						this.match(CypherParser.T__16);
						this.state = 2720;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4293918721) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294967295) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294967295) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4294967295) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4294967295) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 10227519) !== 0)) {
							{
							this.state = 2719;
							this.expression();
							}
						}

						this.state = 2722;
						this.match(CypherParser.T__23);
						this.state = 2724;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4293918721) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294967295) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294967295) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4294967295) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4294967295) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 10227519) !== 0)) {
							{
							this.state = 2723;
							this.expression();
							}
						}

						this.state = 2726;
						this.match(CypherParser.T__17);
						}
						}
						break;
					case 3:
						{
						{
						this.state = 2743;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 357, this._ctx) ) {
						case 1:
							{
							{
							this.state = 2728;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===218) {
								{
								this.state = 2727;
								this.match(CypherParser.SP);
								}
							}

							this.state = 2730;
							this.match(CypherParser.T__26);
							}
							}
							break;
						case 2:
							{
							{
							this.state = 2731;
							this.match(CypherParser.SP);
							this.state = 2732;
							this.match(CypherParser.IN);
							}
							}
							break;
						case 3:
							{
							{
							this.state = 2733;
							this.match(CypherParser.SP);
							this.state = 2734;
							this.match(CypherParser.STARTS);
							this.state = 2735;
							this.match(CypherParser.SP);
							this.state = 2736;
							this.match(CypherParser.WITH);
							}
							}
							break;
						case 4:
							{
							{
							this.state = 2737;
							this.match(CypherParser.SP);
							this.state = 2738;
							this.match(CypherParser.ENDS);
							this.state = 2739;
							this.match(CypherParser.SP);
							this.state = 2740;
							this.match(CypherParser.WITH);
							}
							}
							break;
						case 5:
							{
							{
							this.state = 2741;
							this.match(CypherParser.SP);
							this.state = 2742;
							this.match(CypherParser.CONTAINS);
							}
							}
							break;
						}
						this.state = 2746;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 2745;
							this.match(CypherParser.SP);
							}
						}

						this.state = 2748;
						this.propertyOrLabelsExpression();
						}
						}
						break;
					case 4:
						{
						{
						this.state = 2749;
						this.match(CypherParser.SP);
						this.state = 2750;
						this.match(CypherParser.IS);
						this.state = 2751;
						this.match(CypherParser.SP);
						this.state = 2752;
						this.match(CypherParser.NULL);
						}
						}
						break;
					case 5:
						{
						{
						this.state = 2753;
						this.match(CypherParser.SP);
						this.state = 2754;
						this.match(CypherParser.IS);
						this.state = 2755;
						this.match(CypherParser.SP);
						this.state = 2756;
						this.match(CypherParser.NOT);
						this.state = 2757;
						this.match(CypherParser.SP);
						this.state = 2758;
						this.match(CypherParser.NULL);
						}
						}
						break;
					}
					}
				}
				this.state = 2763;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 360, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyOrLabelsExpression(): PropertyOrLabelsExpressionContext {
		let localctx: PropertyOrLabelsExpressionContext = new PropertyOrLabelsExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 358, CypherParser.RULE_propertyOrLabelsExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2764;
			this.atom();
			this.state = 2774;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2766;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 2765;
						this.match(CypherParser.SP);
						}
					}

					this.state = 2770;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 7:
						{
						this.state = 2768;
						this.propertyLookup();
						}
						break;
					case 2:
						{
						this.state = 2769;
						this.nodeLabels();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 2776;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 363, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filterFunction(): FilterFunctionContext {
		let localctx: FilterFunctionContext = new FilterFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 360, CypherParser.RULE_filterFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2777;
			this.filterFunctionName();
			this.state = 2779;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2778;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2781;
			this.match(CypherParser.T__19);
			this.state = 2783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2782;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2785;
			this.filterExpression();
			this.state = 2787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2786;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2789;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filterFunctionName(): FilterFunctionNameContext {
		let localctx: FilterFunctionNameContext = new FilterFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 362, CypherParser.RULE_filterFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2791;
			this.match(CypherParser.FILTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public existsFunction(): ExistsFunctionContext {
		let localctx: ExistsFunctionContext = new ExistsFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 364, CypherParser.RULE_existsFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2793;
			this.existsFunctionName();
			this.state = 2795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2794;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2797;
			this.match(CypherParser.T__19);
			this.state = 2799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2798;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2801;
			this.expression();
			this.state = 2803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2802;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2805;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public existsFunctionName(): ExistsFunctionNameContext {
		let localctx: ExistsFunctionNameContext = new ExistsFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 366, CypherParser.RULE_existsFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2807;
			this.match(CypherParser.EXISTS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allFunction(): AllFunctionContext {
		let localctx: AllFunctionContext = new AllFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 368, CypherParser.RULE_allFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2809;
			this.allFunctionName();
			this.state = 2811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2810;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2813;
			this.match(CypherParser.T__19);
			this.state = 2815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2814;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2817;
			this.filterExpression();
			this.state = 2819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2818;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2821;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allFunctionName(): AllFunctionNameContext {
		let localctx: AllFunctionNameContext = new AllFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 370, CypherParser.RULE_allFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2823;
			this.match(CypherParser.ALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anyFunction(): AnyFunctionContext {
		let localctx: AnyFunctionContext = new AnyFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 372, CypherParser.RULE_anyFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2825;
			this.anyFunctionName();
			this.state = 2827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2826;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2829;
			this.match(CypherParser.T__19);
			this.state = 2831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2830;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2833;
			this.filterExpression();
			this.state = 2835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2834;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2837;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anyFunctionName(): AnyFunctionNameContext {
		let localctx: AnyFunctionNameContext = new AnyFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 374, CypherParser.RULE_anyFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2839;
			this.match(CypherParser.ANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public noneFunction(): NoneFunctionContext {
		let localctx: NoneFunctionContext = new NoneFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 376, CypherParser.RULE_noneFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2841;
			this.noneFunctionName();
			this.state = 2843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2842;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2845;
			this.match(CypherParser.T__19);
			this.state = 2847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2846;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2849;
			this.filterExpression();
			this.state = 2851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2850;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2853;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public noneFunctionName(): NoneFunctionNameContext {
		let localctx: NoneFunctionNameContext = new NoneFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 378, CypherParser.RULE_noneFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2855;
			this.match(CypherParser.NONE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleFunction(): SingleFunctionContext {
		let localctx: SingleFunctionContext = new SingleFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 380, CypherParser.RULE_singleFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2857;
			this.singleFunctionName();
			this.state = 2859;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2858;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2861;
			this.match(CypherParser.T__19);
			this.state = 2863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2862;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2865;
			this.filterExpression();
			this.state = 2867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2866;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2869;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleFunctionName(): SingleFunctionNameContext {
		let localctx: SingleFunctionNameContext = new SingleFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 382, CypherParser.RULE_singleFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2871;
			this.match(CypherParser.SINGLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extractFunction(): ExtractFunctionContext {
		let localctx: ExtractFunctionContext = new ExtractFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 384, CypherParser.RULE_extractFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2873;
			this.extractFunctionName();
			this.state = 2875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2874;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2877;
			this.match(CypherParser.T__19);
			this.state = 2879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2878;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2881;
			this.filterExpression();
			this.state = 2890;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 386, this._ctx) ) {
			case 1:
				{
				this.state = 2883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2882;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2885;
				this.match(CypherParser.T__22);
				this.state = 2887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2886;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2889;
				this.expression();
				}
				break;
			}
			this.state = 2893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2892;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2895;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extractFunctionName(): ExtractFunctionNameContext {
		let localctx: ExtractFunctionNameContext = new ExtractFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 386, CypherParser.RULE_extractFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2897;
			this.match(CypherParser.EXTRACT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceFunction(): ReduceFunctionContext {
		let localctx: ReduceFunctionContext = new ReduceFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 388, CypherParser.RULE_reduceFunction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 2899;
			this.reduceFunctionName();
			this.state = 2901;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2900;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2903;
			this.match(CypherParser.T__19);
			this.state = 2905;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2904;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2907;
			this.variable();
			this.state = 2909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2908;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2911;
			this.match(CypherParser.T__11);
			this.state = 2913;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2912;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2915;
			this.expression();
			this.state = 2917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2916;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2919;
			this.match(CypherParser.T__14);
			this.state = 2921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2920;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2923;
			this.idInColl();
			this.state = 2925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2924;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2927;
			this.match(CypherParser.T__22);
			this.state = 2929;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2928;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2931;
			this.expression();
			this.state = 2933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 2932;
				this.match(CypherParser.SP);
				}
			}

			this.state = 2935;
			this.match(CypherParser.T__20);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reduceFunctionName(): ReduceFunctionNameContext {
		let localctx: ReduceFunctionNameContext = new ReduceFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 390, CypherParser.RULE_reduceFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2937;
			this.match(CypherParser.REDUCE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shortestPathPatternFunction(): ShortestPathPatternFunctionContext {
		let localctx: ShortestPathPatternFunctionContext = new ShortestPathPatternFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 392, CypherParser.RULE_shortestPathPatternFunction);
		let _la: number;
		try {
			this.state = 2967;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 105:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 2939;
				this.shortestPathFunctionName();
				this.state = 2941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2940;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2943;
				this.match(CypherParser.T__19);
				this.state = 2945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2944;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2947;
				this.patternElement();
				this.state = 2949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2948;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2951;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 106:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 2953;
				this.allShortestPathFunctionName();
				this.state = 2955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2954;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2957;
				this.match(CypherParser.T__19);
				this.state = 2959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2958;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2961;
				this.patternElement();
				this.state = 2963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2962;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2965;
				this.match(CypherParser.T__20);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shortestPathFunctionName(): ShortestPathFunctionNameContext {
		let localctx: ShortestPathFunctionNameContext = new ShortestPathFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 394, CypherParser.RULE_shortestPathFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2969;
			this.match(CypherParser.SHORTESTPATH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allShortestPathFunctionName(): AllShortestPathFunctionNameContext {
		let localctx: AllShortestPathFunctionNameContext = new AllShortestPathFunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 396, CypherParser.RULE_allShortestPathFunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2971;
			this.match(CypherParser.ALLSHORTESTPATHS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 398, CypherParser.RULE_atom);
		let _la: number;
		try {
			this.state = 3004;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 407, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2973;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2974;
				this.parameter();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2975;
				this.caseExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 2976;
				this.match(CypherParser.COUNT);
				this.state = 2978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2977;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2980;
				this.match(CypherParser.T__19);
				this.state = 2982;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2981;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2984;
				this.match(CypherParser.T__18);
				this.state = 2986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 2985;
					this.match(CypherParser.SP);
					}
				}

				this.state = 2988;
				this.match(CypherParser.T__20);
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2989;
				this.listComprehension();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2990;
				this.patternComprehension();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2991;
				this.filterFunction();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2992;
				this.extractFunction();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2993;
				this.reduceFunction();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2994;
				this.allFunction();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 2995;
				this.anyFunction();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 2996;
				this.noneFunction();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 2997;
				this.singleFunction();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 2998;
				this.existsFunction();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 2999;
				this.shortestPathPatternFunction();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 3000;
				this.relationshipsPattern();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 3001;
				this.parenthesizedExpression();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 3002;
				this.functionInvocation();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 3003;
				this.variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 400, CypherParser.RULE_literal);
		try {
			this.state = 3013;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 408, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3006;
				this.numberLiteral();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3007;
				this.stringLiteral();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 3008;
				this.booleanLiteral();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 3009;
				this.match(CypherParser.NULL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 3010;
				this.mapLiteral();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 3011;
				this.listLiteral();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 3012;
				this.mapProjection();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let localctx: StringLiteralContext = new StringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 402, CypherParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3015;
			this.match(CypherParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let localctx: BooleanLiteralContext = new BooleanLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 404, CypherParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3017;
			_la = this._input.LA(1);
			if(!(_la===121 || _la===122)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listLiteral(): ListLiteralContext {
		let localctx: ListLiteralContext = new ListLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 406, CypherParser.RULE_listLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3019;
			this.match(CypherParser.T__16);
			this.state = 3021;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3020;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3040;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4293918721) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294967295) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294967295) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4294967295) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4294967295) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 10227519) !== 0)) {
				{
				this.state = 3023;
				this.expression();
				this.state = 3025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3024;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 3027;
					this.match(CypherParser.T__14);
					this.state = 3029;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3028;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3031;
					this.expression();
					this.state = 3033;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3032;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 3039;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 3042;
			this.match(CypherParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partialComparisonExpression(): PartialComparisonExpressionContext {
		let localctx: PartialComparisonExpressionContext = new PartialComparisonExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 408, CypherParser.RULE_partialComparisonExpression);
		let _la: number;
		try {
			this.state = 3079;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 3044;
				this.match(CypherParser.T__11);
				this.state = 3046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3045;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3048;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 3049;
				this.match(CypherParser.T__27);
				this.state = 3051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3050;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3053;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 3054;
				this.match(CypherParser.T__28);
				this.state = 3056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3055;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3058;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 3059;
				this.match(CypherParser.T__29);
				this.state = 3061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3060;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3063;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 5);
				{
				{
				this.state = 3064;
				this.match(CypherParser.T__30);
				this.state = 3066;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3065;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3068;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 6);
				{
				{
				this.state = 3069;
				this.match(CypherParser.T__31);
				this.state = 3071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3070;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3073;
				this.addOrSubtractExpression();
				}
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 7);
				{
				{
				this.state = 3074;
				this.match(CypherParser.T__32);
				this.state = 3076;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3075;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3078;
				this.addOrSubtractExpression();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parenthesizedExpression(): ParenthesizedExpressionContext {
		let localctx: ParenthesizedExpressionContext = new ParenthesizedExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 410, CypherParser.RULE_parenthesizedExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3081;
			this.match(CypherParser.T__19);
			this.state = 3083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3082;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3085;
			this.expression();
			this.state = 3087;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3086;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3089;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationshipsPattern(): RelationshipsPatternContext {
		let localctx: RelationshipsPatternContext = new RelationshipsPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 412, CypherParser.RULE_relationshipsPattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3091;
			this.nodePattern();
			this.state = 3096;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3093;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3092;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3095;
					this.patternElementChain();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3098;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 426, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filterExpression(): FilterExpressionContext {
		let localctx: FilterExpressionContext = new FilterExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 414, CypherParser.RULE_filterExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3100;
			this.idInColl();
			this.state = 3105;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 428, this._ctx) ) {
			case 1:
				{
				this.state = 3102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3101;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3104;
				this.where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public idInColl(): IdInCollContext {
		let localctx: IdInCollContext = new IdInCollContext(this, this._ctx, this.state);
		this.enterRule(localctx, 416, CypherParser.RULE_idInColl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3107;
			this.variable();
			this.state = 3108;
			this.match(CypherParser.SP);
			this.state = 3109;
			this.match(CypherParser.IN);
			this.state = 3110;
			this.match(CypherParser.SP);
			this.state = 3111;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionInvocation(): FunctionInvocationContext {
		let localctx: FunctionInvocationContext = new FunctionInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 418, CypherParser.RULE_functionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3113;
			this.functionInvocationBody();
			this.state = 3115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3114;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3117;
			this.match(CypherParser.T__19);
			this.state = 3119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3118;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3125;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 432, this._ctx) ) {
			case 1:
				{
				this.state = 3121;
				this.match(CypherParser.DISTINCT);
				this.state = 3123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3122;
					this.match(CypherParser.SP);
					}
				}

				}
				break;
			}
			this.state = 3144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1204232) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4293918721) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294967295) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294967295) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4294967295) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4294967295) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 10227519) !== 0)) {
				{
				this.state = 3127;
				this.expression();
				this.state = 3129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3128;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 3131;
					this.match(CypherParser.T__14);
					this.state = 3133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3132;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3135;
					this.expression();
					this.state = 3137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3136;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 3143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 3146;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionInvocationBody(): FunctionInvocationBodyContext {
		let localctx: FunctionInvocationBodyContext = new FunctionInvocationBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 420, CypherParser.RULE_functionInvocationBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3148;
			this.namespace();
			this.state = 3149;
			this.functionName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 422, CypherParser.RULE_functionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3151;
			_la = this._input.LA(1);
			if(!(_la===115 || _la===214 || _la===217)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public procedureName(): ProcedureNameContext {
		let localctx: ProcedureNameContext = new ProcedureNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 424, CypherParser.RULE_procedureName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3153;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listComprehension(): ListComprehensionContext {
		let localctx: ListComprehensionContext = new ListComprehensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 426, CypherParser.RULE_listComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3155;
			this.match(CypherParser.T__16);
			this.state = 3157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3156;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3159;
			this.filterExpression();
			this.state = 3168;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 441, this._ctx) ) {
			case 1:
				{
				this.state = 3161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3160;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3163;
				this.match(CypherParser.T__22);
				this.state = 3165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3164;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3167;
				this.expression();
				}
				break;
			}
			this.state = 3171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3170;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3173;
			this.match(CypherParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patternComprehension(): PatternComprehensionContext {
		let localctx: PatternComprehensionContext = new PatternComprehensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 428, CypherParser.RULE_patternComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3175;
			this.match(CypherParser.T__16);
			this.state = 3177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3176;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4294967295) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967295) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 4294967295) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 8519679) !== 0) || _la===214 || _la===217) {
				{
				this.state = 3179;
				this.variable();
				this.state = 3181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3180;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3183;
				this.match(CypherParser.T__11);
				this.state = 3185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3184;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 3189;
			this.relationshipsPattern();
			this.state = 3191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3190;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===104) {
				{
				this.state = 3193;
				this.match(CypherParser.WHERE);
				this.state = 3195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3194;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3197;
				this.expression();
				this.state = 3199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3198;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 3203;
			this.match(CypherParser.T__22);
			this.state = 3205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3204;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3207;
			this.expression();
			this.state = 3209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3208;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3211;
			this.match(CypherParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyLookup(): PropertyLookupContext {
		let localctx: PropertyLookupContext = new PropertyLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 430, CypherParser.RULE_propertyLookup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3213;
			this.match(CypherParser.T__6);
			this.state = 3215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3214;
				this.match(CypherParser.SP);
				}
			}

			{
			this.state = 3217;
			this.propertyKeyName();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseExpression(): CaseExpressionContext {
		let localctx: CaseExpressionContext = new CaseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 432, CypherParser.RULE_caseExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3241;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 459, this._ctx) ) {
			case 1:
				{
				{
				this.state = 3219;
				this.match(CypherParser.CASE);
				this.state = 3224;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 3221;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 3220;
							this.match(CypherParser.SP);
							}
						}

						this.state = 3223;
						this.caseAlternatives();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 3226;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 455, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 3228;
				this.match(CypherParser.CASE);
				this.state = 3230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3229;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3232;
				this.expression();
				this.state = 3237;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 3234;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===218) {
							{
							this.state = 3233;
							this.match(CypherParser.SP);
							}
						}

						this.state = 3236;
						this.caseAlternatives();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 3239;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 458, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				break;
			}
			this.state = 3251;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 462, this._ctx) ) {
			case 1:
				{
				this.state = 3244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3243;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3246;
				this.match(CypherParser.ELSE);
				this.state = 3248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3247;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3250;
				this.expression();
				}
				break;
			}
			this.state = 3254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3253;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3256;
			this.match(CypherParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseAlternatives(): CaseAlternativesContext {
		let localctx: CaseAlternativesContext = new CaseAlternativesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 434, CypherParser.RULE_caseAlternatives);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3258;
			this.match(CypherParser.WHEN);
			this.state = 3260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3259;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3262;
			this.expression();
			this.state = 3264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3263;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3266;
			this.match(CypherParser.THEN);
			this.state = 3268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3267;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3270;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let localctx: VariableContext = new VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 436, CypherParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3272;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let localctx: NumberLiteralContext = new NumberLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 438, CypherParser.RULE_numberLiteral);
		try {
			this.state = 3276;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 212:
			case 213:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3274;
				this.doubleLiteral();
				}
				break;
			case 202:
			case 203:
			case 204:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3275;
				this.integerLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapLiteral(): MapLiteralContext {
		let localctx: MapLiteralContext = new MapLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 440, CypherParser.RULE_mapLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3278;
			this.match(CypherParser.T__13);
			this.state = 3280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3279;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4294967295) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967295) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 4294967295) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 8519679) !== 0) || _la===214 || _la===217) {
				{
				this.state = 3282;
				this.literalEntry();
				this.state = 3284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===218) {
					{
					this.state = 3283;
					this.match(CypherParser.SP);
					}
				}

				this.state = 3296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 3286;
					this.match(CypherParser.T__14);
					this.state = 3288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3287;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3290;
					this.literalEntry();
					this.state = 3292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3291;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 3298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 3301;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapProjection(): MapProjectionContext {
		let localctx: MapProjectionContext = new MapProjectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 442, CypherParser.RULE_mapProjection);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3303;
			this.variable();
			this.state = 3305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3304;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3307;
			this.match(CypherParser.T__13);
			this.state = 3309;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 475, this._ctx) ) {
			case 1:
				{
				this.state = 3308;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 3312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4294967295) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967295) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 4294967295) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 8519679) !== 0) || _la===214 || _la===217) {
				{
				this.state = 3311;
				this.mapProjectionVariants();
				}
			}

			this.state = 3324;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 479, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3314;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3317;
					this.match(CypherParser.T__14);
					this.state = 3319;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3318;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3321;
					this.mapProjectionVariants();
					}
					}
				}
				this.state = 3326;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 479, this._ctx);
			}
			this.state = 3328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3327;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3330;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapProjectionVariants(): MapProjectionVariantsContext {
		let localctx: MapProjectionVariantsContext = new MapProjectionVariantsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 444, CypherParser.RULE_mapProjectionVariants);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3336;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 481, this._ctx) ) {
			case 1:
				{
				this.state = 3332;
				this.literalEntry();
				}
				break;
			case 2:
				{
				this.state = 3333;
				this.propertySelector();
				}
				break;
			case 3:
				{
				this.state = 3334;
				this.variableSelector();
				}
				break;
			case 4:
				{
				this.state = 3335;
				this.allPropertiesSelector();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literalEntry(): LiteralEntryContext {
		let localctx: LiteralEntryContext = new LiteralEntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 446, CypherParser.RULE_literalEntry);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3338;
			this.propertyKeyName();
			this.state = 3340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3339;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3342;
			this.match(CypherParser.T__1);
			this.state = 3344;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3343;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3346;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertySelector(): PropertySelectorContext {
		let localctx: PropertySelectorContext = new PropertySelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 448, CypherParser.RULE_propertySelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3348;
			this.match(CypherParser.T__6);
			this.state = 3349;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableSelector(): VariableSelectorContext {
		let localctx: VariableSelectorContext = new VariableSelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 450, CypherParser.RULE_variableSelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3351;
			this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public allPropertiesSelector(): AllPropertiesSelectorContext {
		let localctx: AllPropertiesSelectorContext = new AllPropertiesSelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 452, CypherParser.RULE_allPropertiesSelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3353;
			this.match(CypherParser.T__6);
			this.state = 3354;
			this.match(CypherParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 454, CypherParser.RULE_parameter);
		try {
			this.state = 3358;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3356;
				this.legacyParameter();
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3357;
				this.newParameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public legacyParameter(): LegacyParameterContext {
		let localctx: LegacyParameterContext = new LegacyParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 456, CypherParser.RULE_legacyParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3360;
			this.match(CypherParser.T__13);
			this.state = 3362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3361;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3364;
			this.parameterName();
			this.state = 3366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===218) {
				{
				this.state = 3365;
				this.match(CypherParser.SP);
				}
			}

			this.state = 3368;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public newParameter(): NewParameterContext {
		let localctx: NewParameterContext = new NewParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 458, CypherParser.RULE_newParameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3370;
			this.match(CypherParser.T__33);
			this.state = 3371;
			this.parameterName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterName(): ParameterNameContext {
		let localctx: ParameterNameContext = new ParameterNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 460, CypherParser.RULE_parameterName);
		try {
			this.state = 3375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 205:
			case 214:
			case 217:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3373;
				this.symbolicName();
				}
				break;
			case 203:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3374;
				this.match(CypherParser.DecimalInteger);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyExpressions(): PropertyExpressionsContext {
		let localctx: PropertyExpressionsContext = new PropertyExpressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 462, CypherParser.RULE_propertyExpressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3377;
			this.propertyExpression();
			this.state = 3388;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 490, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3379;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3378;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3381;
					this.match(CypherParser.T__14);
					this.state = 3383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3382;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3385;
					this.propertyExpression();
					}
					}
				}
				this.state = 3390;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 490, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyExpression(): PropertyExpressionContext {
		let localctx: PropertyExpressionContext = new PropertyExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 464, CypherParser.RULE_propertyExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3391;
			this.atom();
			this.state = 3396;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 3393;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3392;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3395;
					this.propertyLookup();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3398;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 492, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyKeys(): PropertyKeysContext {
		let localctx: PropertyKeysContext = new PropertyKeysContext(this, this._ctx, this.state);
		this.enterRule(localctx, 466, CypherParser.RULE_propertyKeys);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3400;
			this.propertyKeyName();
			this.state = 3411;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 495, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3402;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3401;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3404;
					this.match(CypherParser.T__14);
					this.state = 3406;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===218) {
						{
						this.state = 3405;
						this.match(CypherParser.SP);
						}
					}

					this.state = 3408;
					this.propertyKeyName();
					}
					}
				}
				this.state = 3413;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 495, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyKeyName(): PropertyKeyNameContext {
		let localctx: PropertyKeyNameContext = new PropertyKeyNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 468, CypherParser.RULE_propertyKeyName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3414;
			this.symbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let localctx: IntegerLiteralContext = new IntegerLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 470, CypherParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3416;
			_la = this._input.LA(1);
			if(!(((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doubleLiteral(): DoubleLiteralContext {
		let localctx: DoubleLiteralContext = new DoubleLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 472, CypherParser.RULE_doubleLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3418;
			_la = this._input.LA(1);
			if(!(_la===212 || _la===213)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namespace(): NamespaceContext {
		let localctx: NamespaceContext = new NamespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 474, CypherParser.RULE_namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3425;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 496, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 3420;
					this.symbolicName();
					this.state = 3421;
					this.match(CypherParser.T__6);
					}
					}
				}
				this.state = 3427;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 496, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public leftArrowHead(): LeftArrowHeadContext {
		let localctx: LeftArrowHeadContext = new LeftArrowHeadContext(this, this._ctx, this.state);
		this.enterRule(localctx, 476, CypherParser.RULE_leftArrowHead);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3428;
			_la = this._input.LA(1);
			if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 481) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rightArrowHead(): RightArrowHeadContext {
		let localctx: RightArrowHeadContext = new RightArrowHeadContext(this, this._ctx, this.state);
		this.enterRule(localctx, 478, CypherParser.RULE_rightArrowHead);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3430;
			_la = this._input.LA(1);
			if(!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & 3841) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dash(): DashContext {
		let localctx: DashContext = new DashContext(this, this._ctx, this.state);
		this.enterRule(localctx, 480, CypherParser.RULE_dash);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3432;
			_la = this._input.LA(1);
			if(!(_la===3 || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 2047) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbolicName(): SymbolicNameContext {
		let localctx: SymbolicNameContext = new SymbolicNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 482, CypherParser.RULE_symbolicName);
		try {
			this.state = 3438;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 3434;
				this.keyword();
				}
				break;
			case 214:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 3435;
				this.match(CypherParser.UnescapedSymbolicName);
				}
				break;
			case 217:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 3436;
				this.match(CypherParser.EscapedSymbolicName);
				}
				break;
			case 205:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 3437;
				this.match(CypherParser.HexLetter);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 484, CypherParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3440;
			_la = this._input.LA(1);
			if(!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4294967295) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967295) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 4294967295) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 131071) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,221,3443,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,2,181,
	7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,2,187,
	7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,2,193,
	7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,2,199,
	7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,2,205,
	7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,2,211,
	7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,
	7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,
	7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,
	7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
	7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,2,241,
	7,241,2,242,7,242,1,0,1,0,1,0,5,0,490,8,0,10,0,12,0,493,9,0,1,0,3,0,496,
	8,0,1,0,1,0,1,1,3,1,501,8,1,1,1,1,1,3,1,505,8,1,1,1,3,1,508,8,1,1,2,1,2,
	1,2,3,2,513,8,2,1,3,1,3,1,3,1,3,5,3,519,8,3,10,3,12,3,522,9,3,1,4,1,4,1,
	4,5,4,527,8,4,10,4,12,4,530,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	3,5,542,8,5,1,6,1,6,3,6,546,8,6,1,6,1,6,3,6,550,8,6,1,6,1,6,1,7,1,7,1,8,
	1,8,1,8,3,8,559,8,8,1,8,1,8,1,8,3,8,564,8,8,1,8,1,8,3,8,568,8,8,1,8,3,8,
	571,8,8,1,8,3,8,574,8,8,1,9,1,9,1,10,3,10,579,8,10,1,10,1,10,3,10,583,8,
	10,1,11,1,11,1,11,5,11,588,8,11,10,11,12,11,591,9,11,1,12,1,12,1,12,1,12,
	1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,5,14,606,8,14,10,14,12,14,
	609,9,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,
	19,1,19,1,19,1,20,1,20,1,20,5,20,629,8,20,10,20,12,20,632,9,20,1,21,1,21,
	1,21,1,21,1,21,3,21,639,8,21,3,21,641,8,21,1,22,1,22,3,22,645,8,22,1,22,
	5,22,648,8,22,10,22,12,22,651,9,22,1,23,4,23,654,8,23,11,23,12,23,655,1,
	24,1,24,1,25,1,25,3,25,662,8,25,1,25,1,25,3,25,666,8,25,1,25,1,25,3,25,
	670,8,25,1,25,1,25,3,25,674,8,25,5,25,676,8,25,10,25,12,25,679,9,25,1,25,
	1,25,1,25,1,25,3,25,685,8,25,1,25,3,25,688,8,25,1,26,1,26,3,26,692,8,26,
	1,26,1,26,3,26,696,8,26,1,26,1,26,1,27,1,27,3,27,702,8,27,1,27,1,27,3,27,
	706,8,27,1,27,1,27,3,27,710,8,27,1,27,1,27,3,27,714,8,27,5,27,716,8,27,
	10,27,12,27,719,9,27,1,27,1,27,1,27,1,27,3,27,725,8,27,1,27,3,27,728,8,
	27,1,28,1,28,1,28,1,28,1,28,1,28,3,28,736,8,28,1,29,1,29,1,29,1,29,1,29,
	1,29,1,29,3,29,745,8,29,1,30,1,30,1,30,3,30,750,8,30,4,30,752,8,30,11,30,
	12,30,753,1,30,3,30,757,8,30,1,31,1,31,1,31,5,31,762,8,31,10,31,12,31,765,
	9,31,1,32,1,32,1,32,1,33,1,33,3,33,772,8,33,5,33,774,8,33,10,33,12,33,777,
	9,33,1,34,1,34,1,34,3,34,782,8,34,1,35,1,35,1,35,3,35,787,8,35,1,35,1,35,
	5,35,791,8,35,10,35,12,35,794,9,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,
	39,3,39,804,8,39,1,39,1,39,3,39,808,8,39,1,39,1,39,1,40,1,40,1,40,1,40,
	3,40,816,8,40,1,40,3,40,819,8,40,1,41,1,41,3,41,823,8,41,1,42,1,42,3,42,
	827,8,42,1,42,5,42,830,8,42,10,42,12,42,833,9,42,1,43,1,43,3,43,837,8,43,
	1,43,1,43,1,44,1,44,3,44,843,8,44,1,44,5,44,846,8,44,10,44,12,44,849,9,
	44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,858,8,45,1,46,1,46,3,46,862,
	8,46,1,46,5,46,865,8,46,10,46,12,46,868,9,46,1,47,1,47,1,47,1,47,3,47,874,
	8,47,1,47,1,47,1,47,3,47,879,8,47,1,47,3,47,882,8,47,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,898,8,48,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,910,8,49,1,50,1,50,1,50,
	3,50,915,8,50,1,51,1,51,1,51,1,51,1,51,3,51,922,8,51,1,52,1,52,1,52,1,52,
	1,52,1,52,1,52,3,52,931,8,52,1,53,1,53,1,53,1,53,3,53,937,8,53,1,54,1,54,
	1,54,1,54,3,54,943,8,54,1,54,1,54,1,54,1,54,1,54,3,54,950,8,54,1,54,1,54,
	1,54,1,54,3,54,956,8,54,1,54,1,54,1,54,1,54,1,54,3,54,963,8,54,3,54,965,
	8,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,3,55,974,8,55,1,55,1,55,3,55,978,
	8,55,1,55,1,55,1,55,1,55,1,55,3,55,985,8,55,1,55,1,55,1,55,1,55,1,55,3,
	55,992,8,55,3,55,994,8,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,3,57,1013,8,57,1,58,1,58,1,58,1,
	58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,1027,8,59,1,59,1,59,1,59,
	3,59,1032,8,59,1,59,1,59,1,59,1,59,1,59,3,59,1039,8,59,1,59,1,59,1,59,1,
	59,1,59,1,59,1,59,3,59,1048,8,59,3,59,1050,8,59,1,60,1,60,1,60,1,60,1,60,
	1,60,1,60,3,60,1059,8,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,
	61,1,61,1,61,1,61,1,61,3,61,1075,8,61,1,61,1,61,1,61,1,61,3,61,1081,8,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,1092,8,61,1,61,1,61,1,
	61,1,61,1,61,1,61,1,61,1,61,3,61,1102,8,61,1,62,1,62,1,62,1,62,3,62,1108,
	8,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,1118,8,62,1,62,1,62,1,
	62,1,62,1,62,1,62,1,62,1,62,3,62,1128,8,62,1,62,3,62,1131,8,62,1,63,1,63,
	1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,
	63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,
	1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,3,
	63,1178,8,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,
	1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,
	64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,
	1,64,1,64,1,64,1,64,3,64,1225,8,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,3,65,1240,8,65,1,65,1,65,1,65,1,65,1,65,1,65,
	3,65,1248,8,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,
	66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,1268,8,66,1,67,1,67,1,67,1,67,1,67,
	1,67,1,67,3,67,1277,8,67,1,67,1,67,3,67,1281,8,67,1,67,5,67,1284,8,67,10,
	67,12,67,1287,9,67,3,67,1289,8,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,3,
	68,1298,8,68,1,68,1,68,3,68,1302,8,68,1,68,5,68,1305,8,68,10,68,12,68,1308,
	9,68,3,68,1310,8,68,1,69,1,69,3,69,1314,8,69,1,69,1,69,3,69,1318,8,69,1,
	69,5,69,1321,8,69,10,69,12,69,1324,9,69,1,70,1,70,1,70,1,70,1,70,3,70,1331,
	8,70,1,70,1,70,1,70,3,70,1336,8,70,1,71,1,71,1,71,1,71,1,71,3,71,1343,8,
	71,1,71,1,71,1,71,1,71,3,71,1349,8,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,
	1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,
	72,1,72,1,72,1,72,1,72,1,72,3,72,1378,8,72,1,72,1,72,1,72,1,72,1,72,1,72,
	1,72,3,72,1387,8,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,1396,8,72,1,
	72,1,72,1,72,1,72,3,72,1402,8,72,1,72,1,72,1,72,1,72,3,72,1408,8,72,1,72,
	3,72,1411,8,72,3,72,1413,8,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,
	73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,3,73,1433,8,73,1,74,1,74,
	1,74,1,74,1,74,3,74,1440,8,74,1,74,1,74,1,74,1,74,1,74,3,74,1447,8,74,1,
	74,1,74,1,74,1,74,1,74,3,74,1454,8,74,3,74,1456,8,74,1,75,1,75,1,75,3,75,
	1461,8,75,1,75,1,75,3,75,1465,8,75,1,75,5,75,1468,8,75,10,75,12,75,1471,
	9,75,3,75,1473,8,75,1,76,1,76,3,76,1477,8,76,1,76,1,76,3,76,1481,8,76,1,
	76,1,76,1,77,1,77,1,77,1,77,3,77,1489,8,77,1,77,1,77,1,77,1,77,3,77,1495,
	8,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,1504,8,78,1,78,1,78,1,78,1,
	78,1,78,3,78,1511,8,78,1,78,1,78,1,78,3,78,1516,8,78,1,79,1,79,1,79,1,79,
	1,79,1,79,1,79,3,79,1525,8,79,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,
	81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,84,
	1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,3,85,1559,8,85,1,85,1,85,3,
	85,1563,8,85,1,85,1,85,1,85,1,85,1,85,3,85,1570,8,85,1,86,1,86,1,86,1,86,
	3,86,1576,8,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,89,1,
	89,1,89,1,89,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,
	1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,96,1,96,1,
	96,1,96,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,3,99,
	1632,8,99,1,99,1,99,3,99,1636,8,99,1,99,1,99,3,99,1640,8,99,1,99,1,99,3,
	99,1644,8,99,1,99,1,99,1,100,1,100,1,100,1,100,3,100,1652,8,100,1,100,1,
	100,3,100,1656,8,100,1,100,1,100,1,100,3,100,1661,8,100,1,100,1,100,3,100,
	1665,8,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,101,1,101,
	1,101,1,101,3,101,1679,8,101,1,101,1,101,3,101,1683,8,101,1,101,1,101,1,
	101,3,101,1688,8,101,1,101,1,101,3,101,1692,8,101,1,101,1,101,1,101,1,101,
	3,101,1698,8,101,1,101,1,101,3,101,1702,8,101,1,101,1,101,1,101,1,101,1,
	101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,3,102,1716,8,102,1,102,1,
	102,1,102,1,102,1,102,3,102,1723,8,102,1,102,1,102,1,102,1,102,3,102,1729,
	8,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,3,103,1739,8,103,
	1,103,1,103,3,103,1743,8,103,1,103,1,103,1,103,1,103,3,103,1749,8,103,1,
	103,1,103,1,103,1,103,1,104,1,104,3,104,1757,8,104,1,104,1,104,1,104,1,
	104,1,104,1,104,1,104,1,104,1,104,3,104,1768,8,104,1,104,1,104,1,104,1,
	104,3,104,1774,8,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,
	104,1,104,3,104,1786,8,104,1,104,1,104,1,104,1,104,3,104,1792,8,104,1,104,
	1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,3,104,1804,8,104,
	1,104,1,104,3,104,1808,8,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
	1,105,3,105,1818,8,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,
	1,105,1,105,1,105,3,105,1831,8,105,1,106,1,106,3,106,1835,8,106,1,106,1,
	106,3,106,1839,8,106,1,106,1,106,5,106,1843,8,106,10,106,12,106,1846,9,
	106,1,106,3,106,1849,8,106,1,106,3,106,1852,8,106,1,107,1,107,3,107,1856,
	8,107,1,107,1,107,1,107,1,107,1,107,1,107,1,108,1,108,3,108,1866,8,108,
	1,108,1,108,1,108,5,108,1871,8,108,10,108,12,108,1874,9,108,1,109,1,109,
	1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,3,109,1886,8,109,1,110,
	1,110,3,110,1890,8,110,1,110,1,110,1,111,1,111,1,111,1,111,3,111,1898,8,
	111,1,111,1,111,1,112,1,112,3,112,1904,8,112,1,112,1,112,3,112,1908,8,112,
	1,112,1,112,3,112,1912,8,112,1,112,5,112,1915,8,112,10,112,12,112,1918,
	9,112,1,113,1,113,3,113,1922,8,113,1,113,1,113,3,113,1926,8,113,1,113,1,
	113,1,113,1,113,3,113,1932,8,113,1,113,1,113,3,113,1936,8,113,1,113,1,113,
	1,113,1,113,3,113,1942,8,113,1,113,1,113,3,113,1946,8,113,1,113,1,113,1,
	113,1,113,3,113,1952,8,113,1,113,1,113,3,113,1956,8,113,1,114,1,114,3,114,
	1960,8,114,1,114,1,114,3,114,1964,8,114,1,114,1,114,3,114,1968,8,114,1,
	114,1,114,3,114,1972,8,114,1,114,5,114,1975,8,114,10,114,12,114,1978,9,
	114,1,115,1,115,1,115,1,115,3,115,1984,8,115,1,115,1,115,3,115,1988,8,115,
	1,115,5,115,1991,8,115,10,115,12,115,1994,9,115,1,116,1,116,1,116,1,116,
	3,116,2000,8,116,1,117,1,117,3,117,2004,8,117,1,117,1,117,3,117,2008,8,
	117,1,117,1,117,1,117,1,117,1,117,1,117,3,117,2016,8,117,1,117,1,117,1,
	117,4,117,2021,8,117,11,117,12,117,2022,1,117,3,117,2026,8,117,1,117,1,
	117,1,118,1,118,3,118,2032,8,118,1,118,3,118,2035,8,118,1,118,1,118,1,118,
	3,118,2040,8,118,1,118,3,118,2043,8,118,1,119,1,119,3,119,2047,8,119,1,
	119,3,119,2050,8,119,1,119,3,119,2053,8,119,1,119,1,119,1,120,1,120,1,120,
	3,120,2060,8,120,1,120,1,120,3,120,2064,8,120,1,120,1,120,3,120,2068,8,
	120,1,121,1,121,3,121,2072,8,121,1,121,3,121,2075,8,121,1,122,1,122,3,122,
	2079,8,122,1,122,1,122,3,122,2083,8,122,1,122,5,122,2086,8,122,10,122,12,
	122,2089,9,122,1,122,1,122,3,122,2093,8,122,1,122,1,122,3,122,2097,8,122,
	1,122,5,122,2100,8,122,10,122,12,122,2103,9,122,1,122,3,122,2106,8,122,
	1,123,1,123,1,123,1,123,1,123,1,123,1,123,3,123,2115,8,123,1,124,1,124,
	1,124,1,124,3,124,2121,8,124,1,124,3,124,2124,8,124,1,125,1,125,3,125,2128,
	8,125,1,125,3,125,2131,8,125,1,126,1,126,1,126,1,127,1,127,3,127,2138,8,
	127,1,127,3,127,2141,8,127,1,127,3,127,2144,8,127,1,127,1,127,3,127,2148,
	8,127,1,127,5,127,2151,8,127,10,127,12,127,2154,9,127,1,127,3,127,2157,
	8,127,1,127,1,127,1,128,1,128,1,128,1,128,3,128,2165,8,128,1,128,1,128,
	3,128,2169,8,128,1,128,5,128,2172,8,128,10,128,12,128,2175,9,128,1,128,
	1,128,3,128,2179,8,128,1,129,1,129,3,129,2183,8,129,1,130,1,130,1,130,1,
	130,1,130,1,130,1,131,1,131,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,
	133,3,133,2201,8,133,1,133,1,133,3,133,2205,8,133,1,133,5,133,2208,8,133,
	10,133,12,133,2211,9,133,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,
	1,136,1,136,3,136,2223,8,136,1,136,1,136,3,136,2227,8,136,3,136,2229,8,
	136,1,137,3,137,2232,8,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,3,
	137,2241,8,137,1,137,1,137,3,137,2245,8,137,1,137,1,137,3,137,2249,8,137,
	1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,3,137,2261,
	8,137,1,137,1,137,3,137,2265,8,137,1,137,5,137,2268,8,137,10,137,12,137,
	2271,9,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,3,137,2280,8,137,1,
	138,1,138,1,138,1,138,3,138,2286,8,138,1,138,1,138,3,138,2290,8,138,1,138,
	5,138,2293,8,138,10,138,12,138,2296,9,138,1,138,3,138,2299,8,138,1,139,
	1,139,3,139,2303,8,139,1,139,1,139,3,139,2307,8,139,1,139,1,139,1,140,1,
	140,3,140,2313,8,140,1,141,1,141,3,141,2317,8,141,1,141,1,141,1,141,3,141,
	2322,8,141,1,142,1,142,1,142,1,142,3,142,2328,8,142,1,143,1,143,1,143,1,
	143,1,143,1,143,1,143,3,143,2337,8,143,1,143,1,143,1,144,1,144,1,144,1,
	144,1,144,3,144,2346,8,144,1,144,1,144,1,145,1,145,1,145,1,145,3,145,2354,
	8,145,1,145,1,145,1,146,1,146,3,146,2360,8,146,1,146,1,146,3,146,2364,8,
	146,1,146,5,146,2367,8,146,10,146,12,146,2370,9,146,1,147,1,147,1,147,1,
	147,1,148,1,148,3,148,2378,8,148,1,148,1,148,3,148,2382,8,148,1,148,5,148,
	2385,8,148,10,148,12,148,2388,9,148,1,149,1,149,3,149,2392,8,149,1,149,
	1,149,3,149,2396,8,149,1,149,1,149,1,149,3,149,2401,8,149,1,150,1,150,3,
	150,2405,8,150,1,151,1,151,3,151,2409,8,151,1,151,5,151,2412,8,151,10,151,
	12,151,2415,9,151,1,151,1,151,1,151,1,151,3,151,2421,8,151,1,152,1,152,
	3,152,2425,8,152,1,152,1,152,3,152,2429,8,152,3,152,2431,8,152,1,152,1,
	152,3,152,2435,8,152,3,152,2437,8,152,1,152,1,152,3,152,2441,8,152,3,152,
	2443,8,152,1,152,1,152,1,153,1,153,3,153,2449,8,153,1,153,1,153,1,154,1,
	154,3,154,2455,8,154,1,154,3,154,2458,8,154,1,154,3,154,2461,8,154,1,154,
	1,154,1,155,1,155,3,155,2467,8,155,1,155,1,155,1,155,3,155,2472,8,155,1,
	156,1,156,3,156,2476,8,156,1,156,1,156,1,156,3,156,2481,8,156,1,157,1,157,
	3,157,2485,8,157,1,157,1,157,3,157,2489,8,157,3,157,2491,8,157,1,157,1,
	157,3,157,2495,8,157,3,157,2497,8,157,1,157,3,157,2500,8,157,1,157,1,157,
	3,157,2504,8,157,3,157,2506,8,157,1,157,1,157,1,158,1,158,3,158,2512,8,
	158,1,159,1,159,3,159,2516,8,159,1,159,1,159,1,160,1,160,3,160,2522,8,160,
	1,160,1,160,5,160,2526,8,160,10,160,12,160,2529,9,160,1,161,1,161,1,161,
	1,162,3,162,2535,8,162,1,162,1,162,1,163,1,163,3,163,2541,8,163,1,163,5,
	163,2544,8,163,10,163,12,163,2547,9,163,1,164,1,164,1,164,1,165,1,165,3,
	165,2554,8,165,1,165,1,165,3,165,2558,8,165,3,165,2560,8,165,1,165,1,165,
	3,165,2564,8,165,1,165,1,165,3,165,2568,8,165,3,165,2570,8,165,3,165,2572,
	8,165,1,166,1,166,1,167,1,167,1,168,1,168,1,169,1,169,1,169,1,169,1,169,
	5,169,2585,8,169,10,169,12,169,2588,9,169,1,170,1,170,1,170,1,170,1,170,
	5,170,2595,8,170,10,170,12,170,2598,9,170,1,171,1,171,1,171,1,171,1,171,
	5,171,2605,8,171,10,171,12,171,2608,9,171,1,172,1,172,3,172,2612,8,172,
	5,172,2614,8,172,10,172,12,172,2617,9,172,1,172,1,172,1,173,1,173,3,173,
	2623,8,173,1,173,5,173,2626,8,173,10,173,12,173,2629,9,173,1,174,1,174,
	3,174,2633,8,174,1,174,1,174,3,174,2637,8,174,1,174,1,174,3,174,2641,8,
	174,1,174,1,174,3,174,2645,8,174,1,174,5,174,2648,8,174,10,174,12,174,2651,
	9,174,1,175,1,175,3,175,2655,8,175,1,175,1,175,3,175,2659,8,175,1,175,1,
	175,3,175,2663,8,175,1,175,1,175,3,175,2667,8,175,1,175,1,175,3,175,2671,
	8,175,1,175,1,175,3,175,2675,8,175,1,175,5,175,2678,8,175,10,175,12,175,
	2681,9,175,1,176,1,176,3,176,2685,8,176,1,176,1,176,3,176,2689,8,176,1,
	176,5,176,2692,8,176,10,176,12,176,2695,9,176,1,177,1,177,3,177,2699,8,
	177,5,177,2701,8,177,10,177,12,177,2704,9,177,1,177,1,177,1,178,1,178,3,
	178,2710,8,178,1,178,1,178,1,178,1,178,1,178,3,178,2717,8,178,1,178,1,178,
	3,178,2721,8,178,1,178,1,178,3,178,2725,8,178,1,178,1,178,3,178,2729,8,
	178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,
	178,1,178,3,178,2744,8,178,1,178,3,178,2747,8,178,1,178,1,178,1,178,1,178,
	1,178,1,178,1,178,1,178,1,178,1,178,1,178,5,178,2760,8,178,10,178,12,178,
	2763,9,178,1,179,1,179,3,179,2767,8,179,1,179,1,179,3,179,2771,8,179,5,
	179,2773,8,179,10,179,12,179,2776,9,179,1,180,1,180,3,180,2780,8,180,1,
	180,1,180,3,180,2784,8,180,1,180,1,180,3,180,2788,8,180,1,180,1,180,1,181,
	1,181,1,182,1,182,3,182,2796,8,182,1,182,1,182,3,182,2800,8,182,1,182,1,
	182,3,182,2804,8,182,1,182,1,182,1,183,1,183,1,184,1,184,3,184,2812,8,184,
	1,184,1,184,3,184,2816,8,184,1,184,1,184,3,184,2820,8,184,1,184,1,184,1,
	185,1,185,1,186,1,186,3,186,2828,8,186,1,186,1,186,3,186,2832,8,186,1,186,
	1,186,3,186,2836,8,186,1,186,1,186,1,187,1,187,1,188,1,188,3,188,2844,8,
	188,1,188,1,188,3,188,2848,8,188,1,188,1,188,3,188,2852,8,188,1,188,1,188,
	1,189,1,189,1,190,1,190,3,190,2860,8,190,1,190,1,190,3,190,2864,8,190,1,
	190,1,190,3,190,2868,8,190,1,190,1,190,1,191,1,191,1,192,1,192,3,192,2876,
	8,192,1,192,1,192,3,192,2880,8,192,1,192,1,192,3,192,2884,8,192,1,192,1,
	192,3,192,2888,8,192,1,192,3,192,2891,8,192,1,192,3,192,2894,8,192,1,192,
	1,192,1,193,1,193,1,194,1,194,3,194,2902,8,194,1,194,1,194,3,194,2906,8,
	194,1,194,1,194,3,194,2910,8,194,1,194,1,194,3,194,2914,8,194,1,194,1,194,
	3,194,2918,8,194,1,194,1,194,3,194,2922,8,194,1,194,1,194,3,194,2926,8,
	194,1,194,1,194,3,194,2930,8,194,1,194,1,194,3,194,2934,8,194,1,194,1,194,
	1,195,1,195,1,196,1,196,3,196,2942,8,196,1,196,1,196,3,196,2946,8,196,1,
	196,1,196,3,196,2950,8,196,1,196,1,196,1,196,1,196,3,196,2956,8,196,1,196,
	1,196,3,196,2960,8,196,1,196,1,196,3,196,2964,8,196,1,196,1,196,3,196,2968,
	8,196,1,197,1,197,1,198,1,198,1,199,1,199,1,199,1,199,1,199,3,199,2979,
	8,199,1,199,1,199,3,199,2983,8,199,1,199,1,199,3,199,2987,8,199,1,199,1,
	199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,199,1,
	199,1,199,1,199,3,199,3005,8,199,1,200,1,200,1,200,1,200,1,200,1,200,1,
	200,3,200,3014,8,200,1,201,1,201,1,202,1,202,1,203,1,203,3,203,3022,8,203,
	1,203,1,203,3,203,3026,8,203,1,203,1,203,3,203,3030,8,203,1,203,1,203,3,
	203,3034,8,203,5,203,3036,8,203,10,203,12,203,3039,9,203,3,203,3041,8,203,
	1,203,1,203,1,204,1,204,3,204,3047,8,204,1,204,1,204,1,204,3,204,3052,8,
	204,1,204,1,204,1,204,3,204,3057,8,204,1,204,1,204,1,204,3,204,3062,8,204,
	1,204,1,204,1,204,3,204,3067,8,204,1,204,1,204,1,204,3,204,3072,8,204,1,
	204,1,204,1,204,3,204,3077,8,204,1,204,3,204,3080,8,204,1,205,1,205,3,205,
	3084,8,205,1,205,1,205,3,205,3088,8,205,1,205,1,205,1,206,1,206,3,206,3094,
	8,206,1,206,4,206,3097,8,206,11,206,12,206,3098,1,207,1,207,3,207,3103,
	8,207,1,207,3,207,3106,8,207,1,208,1,208,1,208,1,208,1,208,1,208,1,209,
	1,209,3,209,3116,8,209,1,209,1,209,3,209,3120,8,209,1,209,1,209,3,209,3124,
	8,209,3,209,3126,8,209,1,209,1,209,3,209,3130,8,209,1,209,1,209,3,209,3134,
	8,209,1,209,1,209,3,209,3138,8,209,5,209,3140,8,209,10,209,12,209,3143,
	9,209,3,209,3145,8,209,1,209,1,209,1,210,1,210,1,210,1,211,1,211,1,212,
	1,212,1,213,1,213,3,213,3158,8,213,1,213,1,213,3,213,3162,8,213,1,213,1,
	213,3,213,3166,8,213,1,213,3,213,3169,8,213,1,213,3,213,3172,8,213,1,213,
	1,213,1,214,1,214,3,214,3178,8,214,1,214,1,214,3,214,3182,8,214,1,214,1,
	214,3,214,3186,8,214,3,214,3188,8,214,1,214,1,214,3,214,3192,8,214,1,214,
	1,214,3,214,3196,8,214,1,214,1,214,3,214,3200,8,214,3,214,3202,8,214,1,
	214,1,214,3,214,3206,8,214,1,214,1,214,3,214,3210,8,214,1,214,1,214,1,215,
	1,215,3,215,3216,8,215,1,215,1,215,1,216,1,216,3,216,3222,8,216,1,216,4,
	216,3225,8,216,11,216,12,216,3226,1,216,1,216,3,216,3231,8,216,1,216,1,
	216,3,216,3235,8,216,1,216,4,216,3238,8,216,11,216,12,216,3239,3,216,3242,
	8,216,1,216,3,216,3245,8,216,1,216,1,216,3,216,3249,8,216,1,216,3,216,3252,
	8,216,1,216,3,216,3255,8,216,1,216,1,216,1,217,1,217,3,217,3261,8,217,1,
	217,1,217,3,217,3265,8,217,1,217,1,217,3,217,3269,8,217,1,217,1,217,1,218,
	1,218,1,219,1,219,3,219,3277,8,219,1,220,1,220,3,220,3281,8,220,1,220,1,
	220,3,220,3285,8,220,1,220,1,220,3,220,3289,8,220,1,220,1,220,3,220,3293,
	8,220,5,220,3295,8,220,10,220,12,220,3298,9,220,3,220,3300,8,220,1,220,
	1,220,1,221,1,221,3,221,3306,8,221,1,221,1,221,3,221,3310,8,221,1,221,3,
	221,3313,8,221,1,221,3,221,3316,8,221,1,221,1,221,3,221,3320,8,221,1,221,
	5,221,3323,8,221,10,221,12,221,3326,9,221,1,221,3,221,3329,8,221,1,221,
	1,221,1,222,1,222,1,222,1,222,3,222,3337,8,222,1,223,1,223,3,223,3341,8,
	223,1,223,1,223,3,223,3345,8,223,1,223,1,223,1,224,1,224,1,224,1,225,1,
	225,1,226,1,226,1,226,1,227,1,227,3,227,3359,8,227,1,228,1,228,3,228,3363,
	8,228,1,228,1,228,3,228,3367,8,228,1,228,1,228,1,229,1,229,1,229,1,230,
	1,230,3,230,3376,8,230,1,231,1,231,3,231,3380,8,231,1,231,1,231,3,231,3384,
	8,231,1,231,5,231,3387,8,231,10,231,12,231,3390,9,231,1,232,1,232,3,232,
	3394,8,232,1,232,4,232,3397,8,232,11,232,12,232,3398,1,233,1,233,3,233,
	3403,8,233,1,233,1,233,3,233,3407,8,233,1,233,5,233,3410,8,233,10,233,12,
	233,3413,9,233,1,234,1,234,1,235,1,235,1,236,1,236,1,237,1,237,1,237,5,
	237,3424,8,237,10,237,12,237,3427,9,237,1,238,1,238,1,239,1,239,1,240,1,
	240,1,241,1,241,1,241,1,241,3,241,3439,8,241,1,242,1,242,1,242,1,649,0,
	243,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
	48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
	96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
	134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,
	170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,
	206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,
	242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,272,274,276,
	278,280,282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,
	314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,346,348,
	350,352,354,356,358,360,362,364,366,368,370,372,374,376,378,380,382,384,
	386,388,390,392,394,396,398,400,402,404,406,408,410,412,414,416,418,420,
	422,424,426,428,430,432,434,436,438,440,442,444,446,448,450,452,454,456,
	458,460,462,464,466,468,470,472,474,476,478,480,482,484,0,24,2,0,7,7,13,
	13,1,0,158,159,1,0,136,137,1,0,138,139,2,0,64,64,171,171,2,0,66,66,181,
	181,1,0,174,175,1,0,178,179,1,0,176,177,2,0,102,102,161,161,2,0,101,101,
	162,162,1,0,163,164,1,0,152,153,1,0,94,97,1,0,102,103,2,0,3,3,13,13,1,0,
	121,122,3,0,115,115,214,214,217,217,1,0,202,204,1,0,212,213,2,0,30,30,35,
	38,2,0,31,31,39,42,2,0,3,3,43,53,1,0,54,198,3816,0,486,1,0,0,0,2,500,1,
	0,0,0,4,509,1,0,0,0,6,514,1,0,0,0,8,523,1,0,0,0,10,541,1,0,0,0,12,543,1,
	0,0,0,14,553,1,0,0,0,16,555,1,0,0,0,18,575,1,0,0,0,20,578,1,0,0,0,22,584,
	1,0,0,0,24,592,1,0,0,0,26,600,1,0,0,0,28,602,1,0,0,0,30,610,1,0,0,0,32,
	612,1,0,0,0,34,617,1,0,0,0,36,619,1,0,0,0,38,622,1,0,0,0,40,625,1,0,0,0,
	42,633,1,0,0,0,44,642,1,0,0,0,46,653,1,0,0,0,48,657,1,0,0,0,50,687,1,0,
	0,0,52,689,1,0,0,0,54,727,1,0,0,0,56,735,1,0,0,0,58,737,1,0,0,0,60,751,
	1,0,0,0,62,758,1,0,0,0,64,766,1,0,0,0,66,775,1,0,0,0,68,781,1,0,0,0,70,
	783,1,0,0,0,72,795,1,0,0,0,74,797,1,0,0,0,76,799,1,0,0,0,78,801,1,0,0,0,
	80,818,1,0,0,0,82,822,1,0,0,0,84,824,1,0,0,0,86,834,1,0,0,0,88,840,1,0,
	0,0,90,850,1,0,0,0,92,859,1,0,0,0,94,881,1,0,0,0,96,897,1,0,0,0,98,909,
	1,0,0,0,100,914,1,0,0,0,102,921,1,0,0,0,104,930,1,0,0,0,106,936,1,0,0,0,
	108,964,1,0,0,0,110,993,1,0,0,0,112,995,1,0,0,0,114,1003,1,0,0,0,116,1014,
	1,0,0,0,118,1049,1,0,0,0,120,1051,1,0,0,0,122,1101,1,0,0,0,124,1130,1,0,
	0,0,126,1177,1,0,0,0,128,1224,1,0,0,0,130,1247,1,0,0,0,132,1267,1,0,0,0,
	134,1288,1,0,0,0,136,1309,1,0,0,0,138,1311,1,0,0,0,140,1335,1,0,0,0,142,
	1348,1,0,0,0,144,1412,1,0,0,0,146,1432,1,0,0,0,148,1455,1,0,0,0,150,1472,
	1,0,0,0,152,1474,1,0,0,0,154,1494,1,0,0,0,156,1515,1,0,0,0,158,1517,1,0,
	0,0,160,1526,1,0,0,0,162,1532,1,0,0,0,164,1538,1,0,0,0,166,1544,1,0,0,0,
	168,1548,1,0,0,0,170,1569,1,0,0,0,172,1571,1,0,0,0,174,1579,1,0,0,0,176,
	1585,1,0,0,0,178,1587,1,0,0,0,180,1591,1,0,0,0,182,1595,1,0,0,0,184,1599,
	1,0,0,0,186,1603,1,0,0,0,188,1607,1,0,0,0,190,1611,1,0,0,0,192,1615,1,0,
	0,0,194,1619,1,0,0,0,196,1623,1,0,0,0,198,1627,1,0,0,0,200,1647,1,0,0,0,
	202,1674,1,0,0,0,204,1711,1,0,0,0,206,1734,1,0,0,0,208,1807,1,0,0,0,210,
	1809,1,0,0,0,212,1834,1,0,0,0,214,1853,1,0,0,0,216,1863,1,0,0,0,218,1885,
	1,0,0,0,220,1887,1,0,0,0,222,1893,1,0,0,0,224,1901,1,0,0,0,226,1955,1,0,
	0,0,228,1959,1,0,0,0,230,1979,1,0,0,0,232,1999,1,0,0,0,234,2001,1,0,0,0,
	236,2029,1,0,0,0,238,2044,1,0,0,0,240,2056,1,0,0,0,242,2069,1,0,0,0,244,
	2105,1,0,0,0,246,2114,1,0,0,0,248,2116,1,0,0,0,250,2125,1,0,0,0,252,2132,
	1,0,0,0,254,2135,1,0,0,0,256,2160,1,0,0,0,258,2182,1,0,0,0,260,2184,1,0,
	0,0,262,2190,1,0,0,0,264,2192,1,0,0,0,266,2194,1,0,0,0,268,2212,1,0,0,0,
	270,2216,1,0,0,0,272,2220,1,0,0,0,274,2231,1,0,0,0,276,2281,1,0,0,0,278,
	2300,1,0,0,0,280,2312,1,0,0,0,282,2314,1,0,0,0,284,2323,1,0,0,0,286,2329,
	1,0,0,0,288,2340,1,0,0,0,290,2349,1,0,0,0,292,2357,1,0,0,0,294,2371,1,0,
	0,0,296,2375,1,0,0,0,298,2400,1,0,0,0,300,2404,1,0,0,0,302,2420,1,0,0,0,
	304,2422,1,0,0,0,306,2446,1,0,0,0,308,2452,1,0,0,0,310,2471,1,0,0,0,312,
	2480,1,0,0,0,314,2482,1,0,0,0,316,2511,1,0,0,0,318,2513,1,0,0,0,320,2519,
	1,0,0,0,322,2530,1,0,0,0,324,2534,1,0,0,0,326,2538,1,0,0,0,328,2548,1,0,
	0,0,330,2551,1,0,0,0,332,2573,1,0,0,0,334,2575,1,0,0,0,336,2577,1,0,0,0,
	338,2579,1,0,0,0,340,2589,1,0,0,0,342,2599,1,0,0,0,344,2615,1,0,0,0,346,
	2620,1,0,0,0,348,2630,1,0,0,0,350,2652,1,0,0,0,352,2682,1,0,0,0,354,2702,
	1,0,0,0,356,2707,1,0,0,0,358,2764,1,0,0,0,360,2777,1,0,0,0,362,2791,1,0,
	0,0,364,2793,1,0,0,0,366,2807,1,0,0,0,368,2809,1,0,0,0,370,2823,1,0,0,0,
	372,2825,1,0,0,0,374,2839,1,0,0,0,376,2841,1,0,0,0,378,2855,1,0,0,0,380,
	2857,1,0,0,0,382,2871,1,0,0,0,384,2873,1,0,0,0,386,2897,1,0,0,0,388,2899,
	1,0,0,0,390,2937,1,0,0,0,392,2967,1,0,0,0,394,2969,1,0,0,0,396,2971,1,0,
	0,0,398,3004,1,0,0,0,400,3013,1,0,0,0,402,3015,1,0,0,0,404,3017,1,0,0,0,
	406,3019,1,0,0,0,408,3079,1,0,0,0,410,3081,1,0,0,0,412,3091,1,0,0,0,414,
	3100,1,0,0,0,416,3107,1,0,0,0,418,3113,1,0,0,0,420,3148,1,0,0,0,422,3151,
	1,0,0,0,424,3153,1,0,0,0,426,3155,1,0,0,0,428,3175,1,0,0,0,430,3213,1,0,
	0,0,432,3241,1,0,0,0,434,3258,1,0,0,0,436,3272,1,0,0,0,438,3276,1,0,0,0,
	440,3278,1,0,0,0,442,3303,1,0,0,0,444,3336,1,0,0,0,446,3338,1,0,0,0,448,
	3348,1,0,0,0,450,3351,1,0,0,0,452,3353,1,0,0,0,454,3358,1,0,0,0,456,3360,
	1,0,0,0,458,3370,1,0,0,0,460,3375,1,0,0,0,462,3377,1,0,0,0,464,3391,1,0,
	0,0,466,3400,1,0,0,0,468,3414,1,0,0,0,470,3416,1,0,0,0,472,3418,1,0,0,0,
	474,3425,1,0,0,0,476,3428,1,0,0,0,478,3430,1,0,0,0,480,3432,1,0,0,0,482,
	3438,1,0,0,0,484,3440,1,0,0,0,486,491,3,2,1,0,487,488,5,1,0,0,488,490,3,
	2,1,0,489,487,1,0,0,0,490,493,1,0,0,0,491,489,1,0,0,0,491,492,1,0,0,0,492,
	495,1,0,0,0,493,491,1,0,0,0,494,496,5,1,0,0,495,494,1,0,0,0,495,496,1,0,
	0,0,496,497,1,0,0,0,497,498,5,0,0,1,498,1,1,0,0,0,499,501,5,218,0,0,500,
	499,1,0,0,0,500,501,1,0,0,0,501,504,1,0,0,0,502,505,3,64,32,0,503,505,3,
	4,2,0,504,502,1,0,0,0,504,503,1,0,0,0,505,507,1,0,0,0,506,508,5,218,0,0,
	507,506,1,0,0,0,507,508,1,0,0,0,508,3,1,0,0,0,509,512,3,6,3,0,510,511,5,
	218,0,0,511,513,3,8,4,0,512,510,1,0,0,0,512,513,1,0,0,0,513,5,1,0,0,0,514,
	515,5,2,0,0,515,520,3,482,241,0,516,517,5,3,0,0,517,519,3,482,241,0,518,
	516,1,0,0,0,519,522,1,0,0,0,520,518,1,0,0,0,520,521,1,0,0,0,521,7,1,0,0,
	0,522,520,1,0,0,0,523,528,3,10,5,0,524,525,5,218,0,0,525,527,3,10,5,0,526,
	524,1,0,0,0,527,530,1,0,0,0,528,526,1,0,0,0,528,529,1,0,0,0,529,9,1,0,0,
	0,530,528,1,0,0,0,531,542,3,14,7,0,532,542,3,48,24,0,533,542,3,12,6,0,534,
	542,3,440,220,0,535,542,3,58,29,0,536,542,3,402,201,0,537,542,3,438,219,
	0,538,542,3,404,202,0,539,542,3,62,31,0,540,542,3,60,30,0,541,531,1,0,0,
	0,541,532,1,0,0,0,541,533,1,0,0,0,541,534,1,0,0,0,541,535,1,0,0,0,541,536,
	1,0,0,0,541,537,1,0,0,0,541,538,1,0,0,0,541,539,1,0,0,0,541,540,1,0,0,0,
	542,11,1,0,0,0,543,545,3,482,241,0,544,546,5,218,0,0,545,544,1,0,0,0,545,
	546,1,0,0,0,546,547,1,0,0,0,547,549,5,4,0,0,548,550,5,218,0,0,549,548,1,
	0,0,0,549,550,1,0,0,0,550,551,1,0,0,0,551,552,3,336,168,0,552,13,1,0,0,
	0,553,554,3,16,8,0,554,15,1,0,0,0,555,556,3,18,9,0,556,558,5,5,0,0,557,
	559,3,32,16,0,558,557,1,0,0,0,558,559,1,0,0,0,559,560,1,0,0,0,560,563,3,
	20,10,0,561,562,5,2,0,0,562,564,3,26,13,0,563,561,1,0,0,0,563,564,1,0,0,
	0,564,567,1,0,0,0,565,566,5,6,0,0,566,568,3,28,14,0,567,565,1,0,0,0,567,
	568,1,0,0,0,568,570,1,0,0,0,569,571,3,38,19,0,570,569,1,0,0,0,570,571,1,
	0,0,0,571,573,1,0,0,0,572,574,3,36,18,0,573,572,1,0,0,0,573,574,1,0,0,0,
	574,17,1,0,0,0,575,576,3,44,22,0,576,19,1,0,0,0,577,579,5,6,0,0,578,577,
	1,0,0,0,578,579,1,0,0,0,579,582,1,0,0,0,580,583,3,22,11,0,581,583,3,24,
	12,0,582,580,1,0,0,0,582,581,1,0,0,0,583,21,1,0,0,0,584,589,3,44,22,0,585,
	586,5,7,0,0,586,588,3,44,22,0,587,585,1,0,0,0,588,591,1,0,0,0,589,587,1,
	0,0,0,589,590,1,0,0,0,590,23,1,0,0,0,591,589,1,0,0,0,592,593,3,46,23,0,
	593,594,5,7,0,0,594,595,3,46,23,0,595,596,5,7,0,0,596,597,3,46,23,0,597,
	598,5,7,0,0,598,599,3,46,23,0,599,25,1,0,0,0,600,601,3,46,23,0,601,27,1,
	0,0,0,602,607,3,44,22,0,603,604,5,6,0,0,604,606,3,44,22,0,605,603,1,0,0,
	0,606,609,1,0,0,0,607,605,1,0,0,0,607,608,1,0,0,0,608,29,1,0,0,0,609,607,
	1,0,0,0,610,611,3,44,22,0,611,31,1,0,0,0,612,613,3,30,15,0,613,614,5,2,
	0,0,614,615,3,34,17,0,615,616,5,8,0,0,616,33,1,0,0,0,617,618,3,44,22,0,
	618,35,1,0,0,0,619,620,5,9,0,0,620,621,3,44,22,0,621,37,1,0,0,0,622,623,
	5,10,0,0,623,624,3,40,20,0,624,39,1,0,0,0,625,630,3,42,21,0,626,627,5,11,
	0,0,627,629,3,42,21,0,628,626,1,0,0,0,629,632,1,0,0,0,630,628,1,0,0,0,630,
	631,1,0,0,0,631,41,1,0,0,0,632,630,1,0,0,0,633,640,3,44,22,0,634,638,5,
	12,0,0,635,639,3,44,22,0,636,639,3,46,23,0,637,639,5,200,0,0,638,635,1,
	0,0,0,638,636,1,0,0,0,638,637,1,0,0,0,639,641,1,0,0,0,640,634,1,0,0,0,640,
	641,1,0,0,0,641,43,1,0,0,0,642,649,3,482,241,0,643,645,7,0,0,0,644,643,
	1,0,0,0,644,645,1,0,0,0,645,646,1,0,0,0,646,648,3,482,241,0,647,644,1,0,
	0,0,648,651,1,0,0,0,649,650,1,0,0,0,649,647,1,0,0,0,650,45,1,0,0,0,651,
	649,1,0,0,0,652,654,3,470,235,0,653,652,1,0,0,0,654,655,1,0,0,0,655,653,
	1,0,0,0,655,656,1,0,0,0,656,47,1,0,0,0,657,658,3,56,28,0,658,49,1,0,0,0,
	659,661,5,14,0,0,660,662,5,218,0,0,661,660,1,0,0,0,661,662,1,0,0,0,662,
	663,1,0,0,0,663,665,3,52,26,0,664,666,5,218,0,0,665,664,1,0,0,0,665,666,
	1,0,0,0,666,677,1,0,0,0,667,669,5,15,0,0,668,670,5,218,0,0,669,668,1,0,
	0,0,669,670,1,0,0,0,670,671,1,0,0,0,671,673,3,52,26,0,672,674,5,218,0,0,
	673,672,1,0,0,0,673,674,1,0,0,0,674,676,1,0,0,0,675,667,1,0,0,0,676,679,
	1,0,0,0,677,675,1,0,0,0,677,678,1,0,0,0,678,680,1,0,0,0,679,677,1,0,0,0,
	680,681,5,16,0,0,681,688,1,0,0,0,682,684,5,14,0,0,683,685,5,218,0,0,684,
	683,1,0,0,0,684,685,1,0,0,0,685,686,1,0,0,0,686,688,5,16,0,0,687,659,1,
	0,0,0,687,682,1,0,0,0,688,51,1,0,0,0,689,691,3,402,201,0,690,692,5,218,
	0,0,691,690,1,0,0,0,691,692,1,0,0,0,692,693,1,0,0,0,693,695,5,2,0,0,694,
	696,5,218,0,0,695,694,1,0,0,0,695,696,1,0,0,0,696,697,1,0,0,0,697,698,3,
	56,28,0,698,53,1,0,0,0,699,701,5,17,0,0,700,702,5,218,0,0,701,700,1,0,0,
	0,701,702,1,0,0,0,702,703,1,0,0,0,703,705,3,56,28,0,704,706,5,218,0,0,705,
	704,1,0,0,0,705,706,1,0,0,0,706,717,1,0,0,0,707,709,5,15,0,0,708,710,5,
	218,0,0,709,708,1,0,0,0,709,710,1,0,0,0,710,711,1,0,0,0,711,713,3,56,28,
	0,712,714,5,218,0,0,713,712,1,0,0,0,713,714,1,0,0,0,714,716,1,0,0,0,715,
	707,1,0,0,0,716,719,1,0,0,0,717,715,1,0,0,0,717,718,1,0,0,0,718,720,1,0,
	0,0,719,717,1,0,0,0,720,721,5,18,0,0,721,728,1,0,0,0,722,724,5,17,0,0,723,
	725,5,218,0,0,724,723,1,0,0,0,724,725,1,0,0,0,725,726,1,0,0,0,726,728,5,
	18,0,0,727,699,1,0,0,0,727,722,1,0,0,0,728,55,1,0,0,0,729,736,3,402,201,
	0,730,736,3,438,219,0,731,736,3,50,25,0,732,736,3,54,27,0,733,736,3,404,
	202,0,734,736,5,114,0,0,735,729,1,0,0,0,735,730,1,0,0,0,735,731,1,0,0,0,
	735,732,1,0,0,0,735,733,1,0,0,0,735,734,1,0,0,0,736,57,1,0,0,0,737,738,
	3,436,218,0,738,739,5,2,0,0,739,744,5,218,0,0,740,745,5,199,0,0,741,745,
	3,438,219,0,742,745,3,404,202,0,743,745,3,482,241,0,744,740,1,0,0,0,744,
	741,1,0,0,0,744,742,1,0,0,0,744,743,1,0,0,0,745,59,1,0,0,0,746,749,5,6,
	0,0,747,750,3,482,241,0,748,750,3,438,219,0,749,747,1,0,0,0,749,748,1,0,
	0,0,750,752,1,0,0,0,751,746,1,0,0,0,752,753,1,0,0,0,753,751,1,0,0,0,753,
	754,1,0,0,0,754,756,1,0,0,0,755,757,5,6,0,0,756,755,1,0,0,0,756,757,1,0,
	0,0,757,61,1,0,0,0,758,763,3,482,241,0,759,760,5,3,0,0,760,762,3,482,241,
	0,761,759,1,0,0,0,762,765,1,0,0,0,763,761,1,0,0,0,763,764,1,0,0,0,764,63,
	1,0,0,0,765,763,1,0,0,0,766,767,3,66,33,0,767,768,3,80,40,0,768,65,1,0,
	0,0,769,771,3,68,34,0,770,772,5,218,0,0,771,770,1,0,0,0,771,772,1,0,0,0,
	772,774,1,0,0,0,773,769,1,0,0,0,774,777,1,0,0,0,775,773,1,0,0,0,775,776,
	1,0,0,0,776,67,1,0,0,0,777,775,1,0,0,0,778,782,3,70,35,0,779,782,3,74,37,
	0,780,782,3,76,38,0,781,778,1,0,0,0,781,779,1,0,0,0,781,780,1,0,0,0,782,
	69,1,0,0,0,783,786,5,54,0,0,784,785,5,218,0,0,785,787,3,72,36,0,786,784,
	1,0,0,0,786,787,1,0,0,0,787,792,1,0,0,0,788,789,5,218,0,0,789,791,3,78,
	39,0,790,788,1,0,0,0,791,794,1,0,0,0,792,790,1,0,0,0,792,793,1,0,0,0,793,
	71,1,0,0,0,794,792,1,0,0,0,795,796,5,213,0,0,796,73,1,0,0,0,797,798,5,55,
	0,0,798,75,1,0,0,0,799,800,5,56,0,0,800,77,1,0,0,0,801,803,3,482,241,0,
	802,804,5,218,0,0,803,802,1,0,0,0,803,804,1,0,0,0,804,805,1,0,0,0,805,807,
	5,12,0,0,806,808,5,218,0,0,807,806,1,0,0,0,807,808,1,0,0,0,808,809,1,0,
	0,0,809,810,3,482,241,0,810,79,1,0,0,0,811,819,3,98,49,0,812,819,3,82,41,
	0,813,814,5,132,0,0,814,816,5,218,0,0,815,813,1,0,0,0,815,816,1,0,0,0,816,
	817,1,0,0,0,817,819,3,100,50,0,818,811,1,0,0,0,818,812,1,0,0,0,818,815,
	1,0,0,0,819,81,1,0,0,0,820,823,3,84,42,0,821,823,3,86,43,0,822,820,1,0,
	0,0,822,821,1,0,0,0,823,83,1,0,0,0,824,831,3,88,44,0,825,827,5,218,0,0,
	826,825,1,0,0,0,826,827,1,0,0,0,827,828,1,0,0,0,828,830,3,94,47,0,829,826,
	1,0,0,0,830,833,1,0,0,0,831,829,1,0,0,0,831,832,1,0,0,0,832,85,1,0,0,0,
	833,831,1,0,0,0,834,836,3,90,45,0,835,837,5,218,0,0,836,835,1,0,0,0,836,
	837,1,0,0,0,837,838,1,0,0,0,838,839,3,92,46,0,839,87,1,0,0,0,840,847,3,
	96,48,0,841,843,5,218,0,0,842,841,1,0,0,0,842,843,1,0,0,0,843,844,1,0,0,
	0,844,846,3,96,48,0,845,842,1,0,0,0,846,849,1,0,0,0,847,845,1,0,0,0,847,
	848,1,0,0,0,848,89,1,0,0,0,849,847,1,0,0,0,850,851,5,57,0,0,851,852,5,218,
	0,0,852,853,5,58,0,0,853,854,5,218,0,0,854,857,5,59,0,0,855,856,5,218,0,
	0,856,858,3,470,235,0,857,855,1,0,0,0,857,858,1,0,0,0,858,91,1,0,0,0,859,
	866,3,210,105,0,860,862,5,218,0,0,861,860,1,0,0,0,861,862,1,0,0,0,862,863,
	1,0,0,0,863,865,3,96,48,0,864,861,1,0,0,0,865,868,1,0,0,0,866,864,1,0,0,
	0,866,867,1,0,0,0,867,93,1,0,0,0,868,866,1,0,0,0,869,870,5,60,0,0,870,871,
	5,218,0,0,871,873,5,61,0,0,872,874,5,218,0,0,873,872,1,0,0,0,873,874,1,
	0,0,0,874,875,1,0,0,0,875,882,3,88,44,0,876,878,5,60,0,0,877,879,5,218,
	0,0,878,877,1,0,0,0,878,879,1,0,0,0,879,880,1,0,0,0,880,882,3,88,44,0,881,
	869,1,0,0,0,881,876,1,0,0,0,882,95,1,0,0,0,883,898,3,210,105,0,884,898,
	3,276,138,0,885,898,3,212,106,0,886,898,3,214,107,0,887,898,3,216,108,0,
	888,898,3,220,110,0,889,898,3,222,111,0,890,898,3,224,112,0,891,898,3,228,
	114,0,892,898,3,230,115,0,893,898,3,234,117,0,894,898,3,236,118,0,895,898,
	3,238,119,0,896,898,3,248,124,0,897,883,1,0,0,0,897,884,1,0,0,0,897,885,
	1,0,0,0,897,886,1,0,0,0,897,887,1,0,0,0,897,888,1,0,0,0,897,889,1,0,0,0,
	897,890,1,0,0,0,897,891,1,0,0,0,897,892,1,0,0,0,897,893,1,0,0,0,897,894,
	1,0,0,0,897,895,1,0,0,0,897,896,1,0,0,0,898,97,1,0,0,0,899,910,3,186,93,
	0,900,910,3,196,98,0,901,910,3,178,89,0,902,910,3,188,94,0,903,910,3,180,
	90,0,904,910,3,190,95,0,905,910,3,182,91,0,906,910,3,192,96,0,907,910,3,
	184,92,0,908,910,3,194,97,0,909,899,1,0,0,0,909,900,1,0,0,0,909,901,1,0,
	0,0,909,902,1,0,0,0,909,903,1,0,0,0,909,904,1,0,0,0,909,905,1,0,0,0,909,
	906,1,0,0,0,909,907,1,0,0,0,909,908,1,0,0,0,910,99,1,0,0,0,911,915,3,102,
	51,0,912,915,3,104,52,0,913,915,3,106,53,0,914,911,1,0,0,0,914,912,1,0,
	0,0,914,913,1,0,0,0,915,101,1,0,0,0,916,922,3,154,77,0,917,922,3,156,78,
	0,918,922,3,158,79,0,919,922,3,160,80,0,920,922,3,162,81,0,921,916,1,0,
	0,0,921,917,1,0,0,0,921,918,1,0,0,0,921,919,1,0,0,0,921,920,1,0,0,0,922,
	103,1,0,0,0,923,931,3,108,54,0,924,931,3,110,55,0,925,931,3,114,57,0,926,
	931,3,116,58,0,927,931,3,118,59,0,928,931,3,120,60,0,929,931,3,122,61,0,
	930,923,1,0,0,0,930,924,1,0,0,0,930,925,1,0,0,0,930,926,1,0,0,0,930,927,
	1,0,0,0,930,928,1,0,0,0,930,929,1,0,0,0,931,105,1,0,0,0,932,937,3,124,62,
	0,933,937,3,126,63,0,934,937,3,128,64,0,935,937,3,130,65,0,936,932,1,0,
	0,0,936,933,1,0,0,0,936,934,1,0,0,0,936,935,1,0,0,0,937,107,1,0,0,0,938,
	939,5,133,0,0,939,942,5,218,0,0,940,941,5,61,0,0,941,943,5,218,0,0,942,
	940,1,0,0,0,942,943,1,0,0,0,943,944,1,0,0,0,944,949,5,144,0,0,945,946,5,
	218,0,0,946,947,5,73,0,0,947,948,5,218,0,0,948,950,5,146,0,0,949,945,1,
	0,0,0,949,950,1,0,0,0,950,965,1,0,0,0,951,952,5,133,0,0,952,955,5,218,0,
	0,953,954,5,147,0,0,954,956,5,218,0,0,955,953,1,0,0,0,955,956,1,0,0,0,956,
	957,1,0,0,0,957,962,5,144,0,0,958,959,5,218,0,0,959,960,5,73,0,0,960,961,
	5,218,0,0,961,963,5,146,0,0,962,958,1,0,0,0,962,963,1,0,0,0,963,965,1,0,
	0,0,964,938,1,0,0,0,964,951,1,0,0,0,965,109,1,0,0,0,966,967,5,62,0,0,967,
	968,5,218,0,0,968,969,5,143,0,0,969,970,5,218,0,0,970,973,3,482,241,0,971,
	972,5,218,0,0,972,974,3,164,82,0,973,971,1,0,0,0,973,974,1,0,0,0,974,977,
	1,0,0,0,975,976,5,218,0,0,976,978,3,112,56,0,977,975,1,0,0,0,977,978,1,
	0,0,0,978,994,1,0,0,0,979,980,5,62,0,0,980,984,5,218,0,0,981,982,3,168,
	84,0,982,983,5,218,0,0,983,985,1,0,0,0,984,981,1,0,0,0,984,985,1,0,0,0,
	985,986,1,0,0,0,986,987,5,143,0,0,987,988,5,218,0,0,988,991,3,482,241,0,
	989,990,5,218,0,0,990,992,3,112,56,0,991,989,1,0,0,0,991,992,1,0,0,0,992,
	994,1,0,0,0,993,966,1,0,0,0,993,979,1,0,0,0,994,111,1,0,0,0,995,996,5,76,
	0,0,996,997,5,218,0,0,997,998,5,165,0,0,998,999,5,218,0,0,999,1000,5,166,
	0,0,1000,1001,5,218,0,0,1001,1002,3,482,241,0,1002,113,1,0,0,0,1003,1004,
	5,63,0,0,1004,1005,5,218,0,0,1005,1006,5,143,0,0,1006,1007,5,218,0,0,1007,
	1012,3,482,241,0,1008,1009,5,218,0,0,1009,1010,5,141,0,0,1010,1011,5,218,
	0,0,1011,1013,5,70,0,0,1012,1008,1,0,0,0,1012,1013,1,0,0,0,1013,115,1,0,
	0,0,1014,1015,5,133,0,0,1015,1016,5,218,0,0,1016,1017,5,146,0,0,1017,117,
	1,0,0,0,1018,1019,5,62,0,0,1019,1020,5,218,0,0,1020,1021,5,145,0,0,1021,
	1022,5,218,0,0,1022,1023,3,30,15,0,1023,1026,5,218,0,0,1024,1025,5,218,
	0,0,1025,1027,3,164,82,0,1026,1024,1,0,0,0,1026,1027,1,0,0,0,1027,1028,
	1,0,0,0,1028,1031,3,170,85,0,1029,1030,5,218,0,0,1030,1032,3,174,87,0,1031,
	1029,1,0,0,0,1031,1032,1,0,0,0,1032,1050,1,0,0,0,1033,1034,5,62,0,0,1034,
	1038,5,218,0,0,1035,1036,3,168,84,0,1036,1037,5,218,0,0,1037,1039,1,0,0,
	0,1038,1035,1,0,0,0,1038,1039,1,0,0,0,1039,1040,1,0,0,0,1040,1041,5,145,
	0,0,1041,1042,5,218,0,0,1042,1043,3,30,15,0,1043,1044,5,218,0,0,1044,1047,
	3,170,85,0,1045,1046,5,218,0,0,1046,1048,3,174,87,0,1047,1045,1,0,0,0,1047,
	1048,1,0,0,0,1048,1050,1,0,0,0,1049,1018,1,0,0,0,1049,1033,1,0,0,0,1050,
	119,1,0,0,0,1051,1052,5,63,0,0,1052,1053,5,218,0,0,1053,1054,5,145,0,0,
	1054,1055,5,218,0,0,1055,1058,3,30,15,0,1056,1057,5,218,0,0,1057,1059,3,
	166,83,0,1058,1056,1,0,0,0,1058,1059,1,0,0,0,1059,121,1,0,0,0,1060,1061,
	5,154,0,0,1061,1062,5,218,0,0,1062,1063,5,155,0,0,1063,1064,5,218,0,0,1064,
	1065,5,145,0,0,1065,1066,5,218,0,0,1066,1067,5,82,0,0,1067,1068,5,218,0,
	0,1068,1069,5,148,0,0,1069,1070,5,218,0,0,1070,1071,5,75,0,0,1071,1074,
	5,218,0,0,1072,1075,3,34,17,0,1073,1075,3,454,227,0,1074,1072,1,0,0,0,1074,
	1073,1,0,0,0,1075,1076,1,0,0,0,1076,1077,5,156,0,0,1077,1080,5,218,0,0,
	1078,1081,3,34,17,0,1079,1081,3,454,227,0,1080,1078,1,0,0,0,1080,1079,1,
	0,0,0,1081,1102,1,0,0,0,1082,1083,5,154,0,0,1083,1084,5,218,0,0,1084,1085,
	5,145,0,0,1085,1086,5,218,0,0,1086,1087,3,30,15,0,1087,1088,5,218,0,0,1088,
	1091,3,170,85,0,1089,1090,5,218,0,0,1090,1092,3,174,87,0,1091,1089,1,0,
	0,0,1091,1092,1,0,0,0,1092,1102,1,0,0,0,1093,1094,5,154,0,0,1094,1095,5,
	218,0,0,1095,1096,5,145,0,0,1096,1097,5,218,0,0,1097,1098,3,30,15,0,1098,
	1099,5,218,0,0,1099,1100,3,174,87,0,1100,1102,1,0,0,0,1101,1060,1,0,0,0,
	1101,1082,1,0,0,0,1101,1093,1,0,0,0,1102,123,1,0,0,0,1103,1104,5,133,0,
	0,1104,1107,5,218,0,0,1105,1106,5,61,0,0,1106,1108,5,218,0,0,1107,1105,
	1,0,0,0,1107,1108,1,0,0,0,1108,1109,1,0,0,0,1109,1131,5,157,0,0,1110,1111,
	5,133,0,0,1111,1117,5,218,0,0,1112,1113,5,143,0,0,1113,1114,5,218,0,0,1114,
	1115,3,482,241,0,1115,1116,5,218,0,0,1116,1118,1,0,0,0,1117,1112,1,0,0,
	0,1117,1118,1,0,0,0,1118,1119,1,0,0,0,1119,1131,5,157,0,0,1120,1121,5,133,
	0,0,1121,1127,5,218,0,0,1122,1123,5,145,0,0,1123,1124,5,218,0,0,1124,1125,
	3,30,15,0,1125,1126,5,218,0,0,1126,1128,1,0,0,0,1127,1122,1,0,0,0,1127,
	1128,1,0,0,0,1128,1129,1,0,0,0,1129,1131,5,157,0,0,1130,1103,1,0,0,0,1130,
	1110,1,0,0,0,1130,1120,1,0,0,0,1131,125,1,0,0,0,1132,1133,5,158,0,0,1133,
	1134,5,218,0,0,1134,1135,5,143,0,0,1135,1136,5,218,0,0,1136,1137,3,138,
	69,0,1137,1138,5,218,0,0,1138,1139,5,156,0,0,1139,1140,5,218,0,0,1140,1141,
	3,30,15,0,1141,1178,1,0,0,0,1142,1143,5,158,0,0,1143,1144,5,218,0,0,1144,
	1145,3,144,72,0,1145,1146,5,218,0,0,1146,1147,5,65,0,0,1147,1148,5,218,
	0,0,1148,1149,3,134,67,0,1149,1150,5,218,0,0,1150,1151,5,156,0,0,1151,1152,
	3,138,69,0,1152,1178,1,0,0,0,1153,1154,5,158,0,0,1154,1155,5,218,0,0,1155,
	1156,3,140,70,0,1156,1157,5,218,0,0,1157,1158,5,65,0,0,1158,1159,5,218,
	0,0,1159,1160,3,136,68,0,1160,1161,5,218,0,0,1161,1162,3,148,74,0,1162,
	1163,5,218,0,0,1163,1164,5,156,0,0,1164,1165,3,138,69,0,1165,1178,1,0,0,
	0,1166,1167,5,158,0,0,1167,1168,5,218,0,0,1168,1169,3,146,73,0,1169,1170,
	5,218,0,0,1170,1171,5,65,0,0,1171,1172,5,218,0,0,1172,1173,5,135,0,0,1173,
	1174,5,218,0,0,1174,1175,5,156,0,0,1175,1176,3,138,69,0,1176,1178,1,0,0,
	0,1177,1132,1,0,0,0,1177,1142,1,0,0,0,1177,1153,1,0,0,0,1177,1166,1,0,0,
	0,1178,127,1,0,0,0,1179,1180,5,159,0,0,1180,1181,5,218,0,0,1181,1182,5,
	143,0,0,1182,1183,5,218,0,0,1183,1184,3,138,69,0,1184,1185,5,218,0,0,1185,
	1186,5,156,0,0,1186,1187,5,218,0,0,1187,1188,3,30,15,0,1188,1225,1,0,0,
	0,1189,1190,5,159,0,0,1190,1191,5,218,0,0,1191,1192,3,144,72,0,1192,1193,
	5,218,0,0,1193,1194,5,65,0,0,1194,1195,5,218,0,0,1195,1196,3,134,67,0,1196,
	1197,5,218,0,0,1197,1198,5,156,0,0,1198,1199,3,138,69,0,1199,1225,1,0,0,
	0,1200,1201,5,159,0,0,1201,1202,5,218,0,0,1202,1203,3,140,70,0,1203,1204,
	5,218,0,0,1204,1205,5,65,0,0,1205,1206,5,218,0,0,1206,1207,3,136,68,0,1207,
	1208,5,218,0,0,1208,1209,3,148,74,0,1209,1210,5,218,0,0,1210,1211,5,156,
	0,0,1211,1212,3,138,69,0,1212,1225,1,0,0,0,1213,1214,5,159,0,0,1214,1215,
	5,218,0,0,1215,1216,3,146,73,0,1216,1217,5,218,0,0,1217,1218,5,65,0,0,1218,
	1219,5,218,0,0,1219,1220,5,135,0,0,1220,1221,5,218,0,0,1221,1222,5,156,
	0,0,1222,1223,3,138,69,0,1223,1225,1,0,0,0,1224,1179,1,0,0,0,1224,1189,
	1,0,0,0,1224,1200,1,0,0,0,1224,1213,1,0,0,0,1225,129,1,0,0,0,1226,1227,
	5,160,0,0,1227,1228,5,218,0,0,1228,1229,5,143,0,0,1229,1230,5,218,0,0,1230,
	1231,3,138,69,0,1231,1232,5,218,0,0,1232,1233,5,75,0,0,1233,1234,5,218,
	0,0,1234,1235,3,30,15,0,1235,1248,1,0,0,0,1236,1239,5,160,0,0,1237,1238,
	5,218,0,0,1238,1240,7,1,0,0,1239,1237,1,0,0,0,1239,1240,1,0,0,0,1240,1241,
	1,0,0,0,1241,1242,3,132,66,0,1242,1243,5,218,0,0,1243,1244,5,75,0,0,1244,
	1245,5,218,0,0,1245,1246,3,138,69,0,1246,1248,1,0,0,0,1247,1226,1,0,0,0,
	1247,1236,1,0,0,0,1248,131,1,0,0,0,1249,1250,3,144,72,0,1250,1251,5,218,
	0,0,1251,1252,5,65,0,0,1252,1253,5,218,0,0,1253,1254,3,134,67,0,1254,1268,
	1,0,0,0,1255,1256,3,142,71,0,1256,1257,5,218,0,0,1257,1258,5,65,0,0,1258,
	1259,5,218,0,0,1259,1260,3,136,68,0,1260,1268,1,0,0,0,1261,1262,3,146,73,
	0,1262,1263,5,218,0,0,1263,1264,5,65,0,0,1264,1265,5,218,0,0,1265,1266,
	5,135,0,0,1266,1268,1,0,0,0,1267,1249,1,0,0,0,1267,1255,1,0,0,0,1267,1261,
	1,0,0,0,1268,133,1,0,0,0,1269,1270,7,2,0,0,1270,1271,5,218,0,0,1271,1289,
	5,19,0,0,1272,1273,7,2,0,0,1273,1274,5,218,0,0,1274,1285,3,482,241,0,1275,
	1277,5,218,0,0,1276,1275,1,0,0,0,1276,1277,1,0,0,0,1277,1278,1,0,0,0,1278,
	1280,5,15,0,0,1279,1281,5,218,0,0,1280,1279,1,0,0,0,1280,1281,1,0,0,0,1281,
	1282,1,0,0,0,1282,1284,3,482,241,0,1283,1276,1,0,0,0,1284,1287,1,0,0,0,
	1285,1283,1,0,0,0,1285,1286,1,0,0,0,1286,1289,1,0,0,0,1287,1285,1,0,0,0,
	1288,1269,1,0,0,0,1288,1272,1,0,0,0,1289,135,1,0,0,0,1290,1291,7,3,0,0,
	1291,1292,5,218,0,0,1292,1310,5,19,0,0,1293,1294,7,3,0,0,1294,1295,5,218,
	0,0,1295,1306,3,482,241,0,1296,1298,5,218,0,0,1297,1296,1,0,0,0,1297,1298,
	1,0,0,0,1298,1299,1,0,0,0,1299,1301,5,15,0,0,1300,1302,5,218,0,0,1301,1300,
	1,0,0,0,1301,1302,1,0,0,0,1302,1303,1,0,0,0,1303,1305,3,482,241,0,1304,
	1297,1,0,0,0,1305,1308,1,0,0,0,1306,1304,1,0,0,0,1306,1307,1,0,0,0,1307,
	1310,1,0,0,0,1308,1306,1,0,0,0,1309,1290,1,0,0,0,1309,1293,1,0,0,0,1310,
	137,1,0,0,0,1311,1322,3,482,241,0,1312,1314,5,218,0,0,1313,1312,1,0,0,0,
	1313,1314,1,0,0,0,1314,1315,1,0,0,0,1315,1317,5,15,0,0,1316,1318,5,218,
	0,0,1317,1316,1,0,0,0,1317,1318,1,0,0,0,1318,1319,1,0,0,0,1319,1321,3,482,
	241,0,1320,1313,1,0,0,0,1321,1324,1,0,0,0,1322,1320,1,0,0,0,1322,1323,1,
	0,0,0,1323,139,1,0,0,0,1324,1322,1,0,0,0,1325,1336,3,142,71,0,1326,1327,
	5,79,0,0,1327,1328,5,218,0,0,1328,1330,5,14,0,0,1329,1331,5,218,0,0,1330,
	1329,1,0,0,0,1330,1331,1,0,0,0,1331,1332,1,0,0,0,1332,1333,3,150,75,0,1333,
	1334,5,16,0,0,1334,1336,1,0,0,0,1335,1325,1,0,0,0,1335,1326,1,0,0,0,1336,
	141,1,0,0,0,1337,1349,5,167,0,0,1338,1339,5,168,0,0,1339,1340,5,218,0,0,
	1340,1342,5,14,0,0,1341,1343,5,218,0,0,1342,1341,1,0,0,0,1342,1343,1,0,
	0,0,1343,1344,1,0,0,0,1344,1345,3,150,75,0,1345,1346,5,16,0,0,1346,1349,
	1,0,0,0,1347,1349,5,169,0,0,1348,1337,1,0,0,0,1348,1338,1,0,0,0,1348,1347,
	1,0,0,0,1349,143,1,0,0,0,1350,1413,5,170,0,0,1351,1413,5,100,0,0,1352,1413,
	5,142,0,0,1353,1354,5,62,0,0,1354,1355,5,218,0,0,1355,1413,7,4,0,0,1356,
	1357,5,63,0,0,1357,1358,5,218,0,0,1358,1413,7,4,0,0,1359,1360,7,4,0,0,1360,
	1361,5,218,0,0,1361,1413,5,172,0,0,1362,1363,5,62,0,0,1363,1364,5,218,0,
	0,1364,1413,7,5,0,0,1365,1366,5,63,0,0,1366,1367,5,218,0,0,1367,1413,7,
	5,0,0,1368,1369,7,5,0,0,1369,1370,5,218,0,0,1370,1413,5,172,0,0,1371,1372,
	5,62,0,0,1372,1373,5,218,0,0,1373,1374,5,173,0,0,1374,1377,5,218,0,0,1375,
	1376,5,101,0,0,1376,1378,5,218,0,0,1377,1375,1,0,0,0,1377,1378,1,0,0,0,
	1378,1379,1,0,0,0,1379,1413,7,6,0,0,1380,1381,5,62,0,0,1381,1382,5,218,
	0,0,1382,1383,5,173,0,0,1383,1386,5,218,0,0,1384,1385,5,102,0,0,1385,1387,
	5,218,0,0,1386,1384,1,0,0,0,1386,1387,1,0,0,0,1387,1388,1,0,0,0,1388,1413,
	7,7,0,0,1389,1390,5,62,0,0,1390,1391,5,218,0,0,1391,1392,5,173,0,0,1392,
	1395,5,218,0,0,1393,1394,5,180,0,0,1394,1396,5,218,0,0,1395,1393,1,0,0,
	0,1395,1396,1,0,0,0,1396,1397,1,0,0,0,1397,1413,7,8,0,0,1398,1401,5,176,
	0,0,1399,1400,5,218,0,0,1400,1402,5,172,0,0,1401,1399,1,0,0,0,1401,1402,
	1,0,0,0,1402,1413,1,0,0,0,1403,1410,5,61,0,0,1404,1407,5,218,0,0,1405,1406,
	5,136,0,0,1406,1408,5,218,0,0,1407,1405,1,0,0,0,1407,1408,1,0,0,0,1408,
	1409,1,0,0,0,1409,1411,5,157,0,0,1410,1404,1,0,0,0,1410,1411,1,0,0,0,1411,
	1413,1,0,0,0,1412,1350,1,0,0,0,1412,1351,1,0,0,0,1412,1352,1,0,0,0,1412,
	1353,1,0,0,0,1412,1356,1,0,0,0,1412,1359,1,0,0,0,1412,1362,1,0,0,0,1412,
	1365,1,0,0,0,1412,1368,1,0,0,0,1412,1371,1,0,0,0,1412,1380,1,0,0,0,1412,
	1389,1,0,0,0,1412,1398,1,0,0,0,1412,1403,1,0,0,0,1413,145,1,0,0,0,1414,
	1415,5,143,0,0,1415,1416,5,218,0,0,1416,1433,5,172,0,0,1417,1418,5,62,0,
	0,1418,1419,5,218,0,0,1419,1433,5,143,0,0,1420,1421,5,63,0,0,1421,1422,
	5,218,0,0,1422,1433,5,143,0,0,1423,1424,5,182,0,0,1424,1425,5,218,0,0,1425,
	1433,5,143,0,0,1426,1427,5,85,0,0,1427,1428,5,218,0,0,1428,1433,5,143,0,
	0,1429,1430,5,133,0,0,1430,1431,5,218,0,0,1431,1433,5,143,0,0,1432,1414,
	1,0,0,0,1432,1417,1,0,0,0,1432,1420,1,0,0,0,1432,1423,1,0,0,0,1432,1426,
	1,0,0,0,1432,1429,1,0,0,0,1433,147,1,0,0,0,1434,1435,7,9,0,0,1435,1436,
	5,218,0,0,1436,1439,3,150,75,0,1437,1438,5,218,0,0,1438,1440,3,152,76,0,
	1439,1437,1,0,0,0,1439,1440,1,0,0,0,1440,1456,1,0,0,0,1441,1442,7,10,0,
	0,1442,1443,5,218,0,0,1443,1446,3,150,75,0,1444,1445,5,218,0,0,1445,1447,
	3,152,76,0,1446,1444,1,0,0,0,1446,1447,1,0,0,0,1447,1456,1,0,0,0,1448,1449,
	7,11,0,0,1449,1450,5,218,0,0,1450,1453,3,150,75,0,1451,1452,5,218,0,0,1452,
	1454,3,152,76,0,1453,1451,1,0,0,0,1453,1454,1,0,0,0,1454,1456,1,0,0,0,1455,
	1434,1,0,0,0,1455,1441,1,0,0,0,1455,1448,1,0,0,0,1456,149,1,0,0,0,1457,
	1473,5,19,0,0,1458,1469,3,482,241,0,1459,1461,5,218,0,0,1460,1459,1,0,0,
	0,1460,1461,1,0,0,0,1461,1462,1,0,0,0,1462,1464,5,15,0,0,1463,1465,5,218,
	0,0,1464,1463,1,0,0,0,1464,1465,1,0,0,0,1465,1466,1,0,0,0,1466,1468,3,482,
	241,0,1467,1460,1,0,0,0,1468,1471,1,0,0,0,1469,1467,1,0,0,0,1469,1470,1,
	0,0,0,1470,1473,1,0,0,0,1471,1469,1,0,0,0,1472,1457,1,0,0,0,1472,1458,1,
	0,0,0,1473,151,1,0,0,0,1474,1476,5,20,0,0,1475,1477,5,218,0,0,1476,1475,
	1,0,0,0,1476,1477,1,0,0,0,1477,1478,1,0,0,0,1478,1480,5,19,0,0,1479,1481,
	5,218,0,0,1480,1479,1,0,0,0,1480,1481,1,0,0,0,1481,1482,1,0,0,0,1482,1483,
	5,21,0,0,1483,153,1,0,0,0,1484,1485,5,133,0,0,1485,1488,5,218,0,0,1486,
	1487,5,134,0,0,1487,1489,5,218,0,0,1488,1486,1,0,0,0,1488,1489,1,0,0,0,
	1489,1490,1,0,0,0,1490,1495,5,136,0,0,1491,1492,5,133,0,0,1492,1493,5,218,
	0,0,1493,1495,5,137,0,0,1494,1484,1,0,0,0,1494,1491,1,0,0,0,1495,155,1,
	0,0,0,1496,1497,5,62,0,0,1497,1498,5,218,0,0,1498,1499,5,136,0,0,1499,1500,
	5,218,0,0,1500,1503,3,482,241,0,1501,1502,5,218,0,0,1502,1504,3,164,82,
	0,1503,1501,1,0,0,0,1503,1504,1,0,0,0,1504,1516,1,0,0,0,1505,1506,5,62,
	0,0,1506,1510,5,218,0,0,1507,1508,3,168,84,0,1508,1509,5,218,0,0,1509,1511,
	1,0,0,0,1510,1507,1,0,0,0,1510,1511,1,0,0,0,1511,1512,1,0,0,0,1512,1513,
	5,136,0,0,1513,1514,5,218,0,0,1514,1516,3,482,241,0,1515,1496,1,0,0,0,1515,
	1505,1,0,0,0,1516,157,1,0,0,0,1517,1518,5,63,0,0,1518,1519,5,218,0,0,1519,
	1520,5,136,0,0,1520,1521,5,218,0,0,1521,1524,3,482,241,0,1522,1523,5,218,
	0,0,1523,1525,3,166,83,0,1524,1522,1,0,0,0,1524,1525,1,0,0,0,1525,159,1,
	0,0,0,1526,1527,5,100,0,0,1527,1528,5,218,0,0,1528,1529,5,136,0,0,1529,
	1530,5,218,0,0,1530,1531,3,482,241,0,1531,161,1,0,0,0,1532,1533,5,142,0,
	0,1533,1534,5,218,0,0,1534,1535,5,136,0,0,1535,1536,5,218,0,0,1536,1537,
	3,482,241,0,1537,163,1,0,0,0,1538,1539,5,141,0,0,1539,1540,5,218,0,0,1540,
	1541,5,110,0,0,1541,1542,5,218,0,0,1542,1543,5,70,0,0,1543,165,1,0,0,0,
	1544,1545,5,141,0,0,1545,1546,5,218,0,0,1546,1547,5,70,0,0,1547,167,1,0,
	0,0,1548,1549,5,107,0,0,1549,1550,5,218,0,0,1550,1551,5,140,0,0,1551,169,
	1,0,0,0,1552,1553,5,82,0,0,1553,1554,5,218,0,0,1554,1555,5,148,0,0,1555,
	1558,5,218,0,0,1556,1559,3,34,17,0,1557,1559,3,454,227,0,1558,1556,1,0,
	0,0,1558,1557,1,0,0,0,1559,1562,1,0,0,0,1560,1561,5,218,0,0,1561,1563,3,
	172,86,0,1562,1560,1,0,0,0,1562,1563,1,0,0,0,1563,1570,1,0,0,0,1564,1565,
	5,82,0,0,1565,1566,5,218,0,0,1566,1567,5,148,0,0,1567,1568,5,218,0,0,1568,
	1570,3,172,86,0,1569,1552,1,0,0,0,1569,1564,1,0,0,0,1570,171,1,0,0,0,1571,
	1572,5,149,0,0,1572,1575,5,218,0,0,1573,1574,5,110,0,0,1574,1576,5,218,
	0,0,1575,1573,1,0,0,0,1575,1576,1,0,0,0,1576,1577,1,0,0,0,1577,1578,5,150,
	0,0,1578,173,1,0,0,0,1579,1580,5,82,0,0,1580,1581,5,218,0,0,1581,1582,5,
	151,0,0,1582,1583,5,218,0,0,1583,1584,3,176,88,0,1584,175,1,0,0,0,1585,
	1586,7,12,0,0,1586,177,1,0,0,0,1587,1588,5,62,0,0,1588,1589,5,218,0,0,1589,
	1590,3,200,100,0,1590,179,1,0,0,0,1591,1592,5,62,0,0,1592,1593,5,218,0,
	0,1593,1594,3,202,101,0,1594,181,1,0,0,0,1595,1596,5,62,0,0,1596,1597,5,
	218,0,0,1597,1598,3,204,102,0,1598,183,1,0,0,0,1599,1600,5,62,0,0,1600,
	1601,5,218,0,0,1601,1602,3,206,103,0,1602,185,1,0,0,0,1603,1604,5,62,0,
	0,1604,1605,5,218,0,0,1605,1606,3,198,99,0,1606,187,1,0,0,0,1607,1608,5,
	63,0,0,1608,1609,5,218,0,0,1609,1610,3,200,100,0,1610,189,1,0,0,0,1611,
	1612,5,63,0,0,1612,1613,5,218,0,0,1613,1614,3,202,101,0,1614,191,1,0,0,
	0,1615,1616,5,63,0,0,1616,1617,5,218,0,0,1617,1618,3,204,102,0,1618,193,
	1,0,0,0,1619,1620,5,63,0,0,1620,1621,5,218,0,0,1621,1622,3,206,103,0,1622,
	195,1,0,0,0,1623,1624,5,63,0,0,1624,1625,5,218,0,0,1625,1626,3,198,99,0,
	1626,197,1,0,0,0,1627,1628,5,64,0,0,1628,1629,5,218,0,0,1629,1631,5,65,
	0,0,1630,1632,5,218,0,0,1631,1630,1,0,0,0,1631,1632,1,0,0,0,1632,1633,1,
	0,0,0,1633,1635,3,328,164,0,1634,1636,5,218,0,0,1635,1634,1,0,0,0,1635,
	1636,1,0,0,0,1636,1637,1,0,0,0,1637,1639,5,20,0,0,1638,1640,5,218,0,0,1639,
	1638,1,0,0,0,1639,1640,1,0,0,0,1640,1641,1,0,0,0,1641,1643,3,466,233,0,
	1642,1644,5,218,0,0,1643,1642,1,0,0,0,1643,1644,1,0,0,0,1644,1645,1,0,0,
	0,1645,1646,5,21,0,0,1646,199,1,0,0,0,1647,1648,5,66,0,0,1648,1649,5,218,
	0,0,1649,1651,5,65,0,0,1650,1652,5,218,0,0,1651,1650,1,0,0,0,1651,1652,
	1,0,0,0,1652,1653,1,0,0,0,1653,1655,5,20,0,0,1654,1656,5,218,0,0,1655,1654,
	1,0,0,0,1655,1656,1,0,0,0,1656,1657,1,0,0,0,1657,1658,3,436,218,0,1658,
	1660,3,328,164,0,1659,1661,5,218,0,0,1660,1659,1,0,0,0,1660,1661,1,0,0,
	0,1661,1662,1,0,0,0,1662,1664,5,21,0,0,1663,1665,5,218,0,0,1664,1663,1,
	0,0,0,1664,1665,1,0,0,0,1665,1666,1,0,0,0,1666,1667,5,67,0,0,1667,1668,
	5,218,0,0,1668,1669,3,464,232,0,1669,1670,5,218,0,0,1670,1671,5,68,0,0,
	1671,1672,5,218,0,0,1672,1673,5,69,0,0,1673,201,1,0,0,0,1674,1675,5,66,
	0,0,1675,1676,5,218,0,0,1676,1678,5,65,0,0,1677,1679,5,218,0,0,1678,1677,
	1,0,0,0,1678,1679,1,0,0,0,1679,1680,1,0,0,0,1680,1682,5,20,0,0,1681,1683,
	5,218,0,0,1682,1681,1,0,0,0,1682,1683,1,0,0,0,1683,1684,1,0,0,0,1684,1685,
	3,436,218,0,1685,1687,3,328,164,0,1686,1688,5,218,0,0,1687,1686,1,0,0,0,
	1687,1688,1,0,0,0,1688,1689,1,0,0,0,1689,1691,5,21,0,0,1690,1692,5,218,
	0,0,1691,1690,1,0,0,0,1691,1692,1,0,0,0,1692,1693,1,0,0,0,1693,1694,5,67,
	0,0,1694,1695,5,218,0,0,1695,1697,5,20,0,0,1696,1698,5,218,0,0,1697,1696,
	1,0,0,0,1697,1698,1,0,0,0,1698,1699,1,0,0,0,1699,1701,3,462,231,0,1700,
	1702,5,218,0,0,1701,1700,1,0,0,0,1701,1702,1,0,0,0,1702,1703,1,0,0,0,1703,
	1704,5,21,0,0,1704,1705,5,218,0,0,1705,1706,5,68,0,0,1706,1707,5,218,0,
	0,1707,1708,5,101,0,0,1708,1709,5,218,0,0,1709,1710,5,131,0,0,1710,203,
	1,0,0,0,1711,1712,5,66,0,0,1712,1713,5,218,0,0,1713,1715,5,65,0,0,1714,
	1716,5,218,0,0,1715,1714,1,0,0,0,1715,1716,1,0,0,0,1716,1717,1,0,0,0,1717,
	1718,5,20,0,0,1718,1719,3,436,218,0,1719,1720,3,328,164,0,1720,1722,5,21,
	0,0,1721,1723,5,218,0,0,1722,1721,1,0,0,0,1722,1723,1,0,0,0,1723,1724,1,
	0,0,0,1724,1725,5,67,0,0,1725,1726,5,218,0,0,1726,1728,5,70,0,0,1727,1729,
	5,218,0,0,1728,1727,1,0,0,0,1728,1729,1,0,0,0,1729,1730,1,0,0,0,1730,1731,
	5,20,0,0,1731,1732,3,464,232,0,1732,1733,5,21,0,0,1733,205,1,0,0,0,1734,
	1735,5,66,0,0,1735,1736,5,218,0,0,1736,1738,5,65,0,0,1737,1739,5,218,0,
	0,1738,1737,1,0,0,0,1738,1739,1,0,0,0,1739,1740,1,0,0,0,1740,1742,3,208,
	104,0,1741,1743,5,218,0,0,1742,1741,1,0,0,0,1742,1743,1,0,0,0,1743,1744,
	1,0,0,0,1744,1745,5,67,0,0,1745,1746,5,218,0,0,1746,1748,5,70,0,0,1747,
	1749,5,218,0,0,1748,1747,1,0,0,0,1748,1749,1,0,0,0,1749,1750,1,0,0,0,1750,
	1751,5,20,0,0,1751,1752,3,464,232,0,1752,1753,5,21,0,0,1753,207,1,0,0,0,
	1754,1756,5,20,0,0,1755,1757,5,218,0,0,1756,1755,1,0,0,0,1756,1757,1,0,
	0,0,1757,1758,1,0,0,0,1758,1759,5,21,0,0,1759,1760,3,480,240,0,1760,1761,
	5,17,0,0,1761,1762,3,436,218,0,1762,1763,3,318,159,0,1763,1764,5,18,0,0,
	1764,1765,3,480,240,0,1765,1767,5,20,0,0,1766,1768,5,218,0,0,1767,1766,
	1,0,0,0,1767,1768,1,0,0,0,1768,1769,1,0,0,0,1769,1770,5,21,0,0,1770,1808,
	1,0,0,0,1771,1773,5,20,0,0,1772,1774,5,218,0,0,1773,1772,1,0,0,0,1773,1774,
	1,0,0,0,1774,1775,1,0,0,0,1775,1776,5,21,0,0,1776,1777,3,480,240,0,1777,
	1778,5,17,0,0,1778,1779,3,436,218,0,1779,1780,3,318,159,0,1780,1781,5,18,
	0,0,1781,1782,3,480,240,0,1782,1783,3,478,239,0,1783,1785,5,20,0,0,1784,
	1786,5,218,0,0,1785,1784,1,0,0,0,1785,1786,1,0,0,0,1786,1787,1,0,0,0,1787,
	1788,5,21,0,0,1788,1808,1,0,0,0,1789,1791,5,20,0,0,1790,1792,5,218,0,0,
	1791,1790,1,0,0,0,1791,1792,1,0,0,0,1792,1793,1,0,0,0,1793,1794,5,21,0,
	0,1794,1795,3,476,238,0,1795,1796,3,480,240,0,1796,1797,5,17,0,0,1797,1798,
	3,436,218,0,1798,1799,3,318,159,0,1799,1800,5,18,0,0,1800,1801,3,480,240,
	0,1801,1803,5,20,0,0,1802,1804,5,218,0,0,1803,1802,1,0,0,0,1803,1804,1,
	0,0,0,1804,1805,1,0,0,0,1805,1806,5,21,0,0,1806,1808,1,0,0,0,1807,1754,
	1,0,0,0,1807,1771,1,0,0,0,1807,1789,1,0,0,0,1808,209,1,0,0,0,1809,1810,
	5,71,0,0,1810,1811,5,218,0,0,1811,1812,5,72,0,0,1812,1817,5,218,0,0,1813,
	1814,5,73,0,0,1814,1815,5,218,0,0,1815,1816,5,74,0,0,1816,1818,5,218,0,
	0,1817,1813,1,0,0,0,1817,1818,1,0,0,0,1818,1819,1,0,0,0,1819,1820,5,75,
	0,0,1820,1821,5,218,0,0,1821,1822,3,336,168,0,1822,1823,5,218,0,0,1823,
	1824,5,76,0,0,1824,1825,5,218,0,0,1825,1826,3,436,218,0,1826,1830,5,218,
	0,0,1827,1828,5,77,0,0,1828,1829,5,218,0,0,1829,1831,5,199,0,0,1830,1827,
	1,0,0,0,1830,1831,1,0,0,0,1831,211,1,0,0,0,1832,1833,5,78,0,0,1833,1835,
	5,218,0,0,1834,1832,1,0,0,0,1834,1835,1,0,0,0,1835,1836,1,0,0,0,1836,1838,
	5,79,0,0,1837,1839,5,218,0,0,1838,1837,1,0,0,0,1838,1839,1,0,0,0,1839,1840,
	1,0,0,0,1840,1844,3,296,148,0,1841,1843,3,274,137,0,1842,1841,1,0,0,0,1843,
	1846,1,0,0,0,1844,1842,1,0,0,0,1844,1845,1,0,0,0,1845,1851,1,0,0,0,1846,
	1844,1,0,0,0,1847,1849,5,218,0,0,1848,1847,1,0,0,0,1848,1849,1,0,0,0,1849,
	1850,1,0,0,0,1850,1852,3,294,147,0,1851,1848,1,0,0,0,1851,1852,1,0,0,0,
	1852,213,1,0,0,0,1853,1855,5,80,0,0,1854,1856,5,218,0,0,1855,1854,1,0,0,
	0,1855,1856,1,0,0,0,1856,1857,1,0,0,0,1857,1858,3,336,168,0,1858,1859,5,
	218,0,0,1859,1860,5,76,0,0,1860,1861,5,218,0,0,1861,1862,3,436,218,0,1862,
	215,1,0,0,0,1863,1865,5,81,0,0,1864,1866,5,218,0,0,1865,1864,1,0,0,0,1865,
	1866,1,0,0,0,1866,1867,1,0,0,0,1867,1872,3,298,149,0,1868,1869,5,218,0,
	0,1869,1871,3,218,109,0,1870,1868,1,0,0,0,1871,1874,1,0,0,0,1872,1870,1,
	0,0,0,1872,1873,1,0,0,0,1873,217,1,0,0,0,1874,1872,1,0,0,0,1875,1876,5,
	65,0,0,1876,1877,5,218,0,0,1877,1878,5,79,0,0,1878,1879,5,218,0,0,1879,
	1886,3,224,112,0,1880,1881,5,65,0,0,1881,1882,5,218,0,0,1882,1883,5,62,
	0,0,1883,1884,5,218,0,0,1884,1886,3,224,112,0,1885,1875,1,0,0,0,1885,1880,
	1,0,0,0,1886,219,1,0,0,0,1887,1889,5,62,0,0,1888,1890,5,218,0,0,1889,1888,
	1,0,0,0,1889,1890,1,0,0,0,1890,1891,1,0,0,0,1891,1892,3,296,148,0,1892,
	221,1,0,0,0,1893,1894,5,62,0,0,1894,1895,5,218,0,0,1895,1897,5,69,0,0,1896,
	1898,5,218,0,0,1897,1896,1,0,0,0,1897,1898,1,0,0,0,1898,1899,1,0,0,0,1899,
	1900,3,296,148,0,1900,223,1,0,0,0,1901,1903,5,82,0,0,1902,1904,5,218,0,
	0,1903,1902,1,0,0,0,1903,1904,1,0,0,0,1904,1905,1,0,0,0,1905,1916,3,226,
	113,0,1906,1908,5,218,0,0,1907,1906,1,0,0,0,1907,1908,1,0,0,0,1908,1909,
	1,0,0,0,1909,1911,5,15,0,0,1910,1912,5,218,0,0,1911,1910,1,0,0,0,1911,1912,
	1,0,0,0,1912,1913,1,0,0,0,1913,1915,3,226,113,0,1914,1907,1,0,0,0,1915,
	1918,1,0,0,0,1916,1914,1,0,0,0,1916,1917,1,0,0,0,1917,225,1,0,0,0,1918,
	1916,1,0,0,0,1919,1921,3,464,232,0,1920,1922,5,218,0,0,1921,1920,1,0,0,
	0,1921,1922,1,0,0,0,1922,1923,1,0,0,0,1923,1925,5,12,0,0,1924,1926,5,218,
	0,0,1925,1924,1,0,0,0,1925,1926,1,0,0,0,1926,1927,1,0,0,0,1927,1928,3,336,
	168,0,1928,1956,1,0,0,0,1929,1931,3,436,218,0,1930,1932,5,218,0,0,1931,
	1930,1,0,0,0,1931,1932,1,0,0,0,1932,1933,1,0,0,0,1933,1935,5,12,0,0,1934,
	1936,5,218,0,0,1935,1934,1,0,0,0,1935,1936,1,0,0,0,1936,1937,1,0,0,0,1937,
	1938,3,336,168,0,1938,1956,1,0,0,0,1939,1941,3,436,218,0,1940,1942,5,218,
	0,0,1941,1940,1,0,0,0,1941,1942,1,0,0,0,1942,1943,1,0,0,0,1943,1945,5,22,
	0,0,1944,1946,5,218,0,0,1945,1944,1,0,0,0,1945,1946,1,0,0,0,1946,1947,1,
	0,0,0,1947,1948,3,336,168,0,1948,1956,1,0,0,0,1949,1951,3,436,218,0,1950,
	1952,5,218,0,0,1951,1950,1,0,0,0,1951,1952,1,0,0,0,1952,1953,1,0,0,0,1953,
	1954,3,326,163,0,1954,1956,1,0,0,0,1955,1919,1,0,0,0,1955,1929,1,0,0,0,
	1955,1939,1,0,0,0,1955,1949,1,0,0,0,1956,227,1,0,0,0,1957,1958,5,83,0,0,
	1958,1960,5,218,0,0,1959,1957,1,0,0,0,1959,1960,1,0,0,0,1960,1961,1,0,0,
	0,1961,1963,5,84,0,0,1962,1964,5,218,0,0,1963,1962,1,0,0,0,1963,1964,1,
	0,0,0,1964,1965,1,0,0,0,1965,1976,3,336,168,0,1966,1968,5,218,0,0,1967,
	1966,1,0,0,0,1967,1968,1,0,0,0,1968,1969,1,0,0,0,1969,1971,5,15,0,0,1970,
	1972,5,218,0,0,1971,1970,1,0,0,0,1971,1972,1,0,0,0,1972,1973,1,0,0,0,1973,
	1975,3,336,168,0,1974,1967,1,0,0,0,1975,1978,1,0,0,0,1976,1974,1,0,0,0,
	1976,1977,1,0,0,0,1977,229,1,0,0,0,1978,1976,1,0,0,0,1979,1980,5,85,0,0,
	1980,1981,5,218,0,0,1981,1992,3,232,116,0,1982,1984,5,218,0,0,1983,1982,
	1,0,0,0,1983,1984,1,0,0,0,1984,1985,1,0,0,0,1985,1987,5,15,0,0,1986,1988,
	5,218,0,0,1987,1986,1,0,0,0,1987,1988,1,0,0,0,1988,1989,1,0,0,0,1989,1991,
	3,232,116,0,1990,1983,1,0,0,0,1991,1994,1,0,0,0,1992,1990,1,0,0,0,1992,
	1993,1,0,0,0,1993,231,1,0,0,0,1994,1992,1,0,0,0,1995,1996,3,436,218,0,1996,
	1997,3,326,163,0,1997,2000,1,0,0,0,1998,2000,3,464,232,0,1999,1995,1,0,
	0,0,1999,1998,1,0,0,0,2000,233,1,0,0,0,2001,2003,5,86,0,0,2002,2004,5,218,
	0,0,2003,2002,1,0,0,0,2003,2004,1,0,0,0,2004,2005,1,0,0,0,2005,2007,5,20,
	0,0,2006,2008,5,218,0,0,2007,2006,1,0,0,0,2007,2008,1,0,0,0,2008,2009,1,
	0,0,0,2009,2010,3,436,218,0,2010,2011,5,218,0,0,2011,2012,5,87,0,0,2012,
	2013,5,218,0,0,2013,2015,3,336,168,0,2014,2016,5,218,0,0,2015,2014,1,0,
	0,0,2015,2016,1,0,0,0,2016,2017,1,0,0,0,2017,2020,5,23,0,0,2018,2019,5,
	218,0,0,2019,2021,3,96,48,0,2020,2018,1,0,0,0,2021,2022,1,0,0,0,2022,2020,
	1,0,0,0,2022,2023,1,0,0,0,2023,2025,1,0,0,0,2024,2026,5,218,0,0,2025,2024,
	1,0,0,0,2025,2026,1,0,0,0,2026,2027,1,0,0,0,2027,2028,5,21,0,0,2028,235,
	1,0,0,0,2029,2034,5,73,0,0,2030,2032,5,218,0,0,2031,2030,1,0,0,0,2031,2032,
	1,0,0,0,2032,2033,1,0,0,0,2033,2035,5,88,0,0,2034,2031,1,0,0,0,2034,2035,
	1,0,0,0,2035,2036,1,0,0,0,2036,2037,5,218,0,0,2037,2042,3,240,120,0,2038,
	2040,5,218,0,0,2039,2038,1,0,0,0,2039,2040,1,0,0,0,2040,2041,1,0,0,0,2041,
	2043,3,294,147,0,2042,2039,1,0,0,0,2042,2043,1,0,0,0,2043,237,1,0,0,0,2044,
	2049,5,89,0,0,2045,2047,5,218,0,0,2046,2045,1,0,0,0,2046,2047,1,0,0,0,2047,
	2048,1,0,0,0,2048,2050,5,88,0,0,2049,2046,1,0,0,0,2049,2050,1,0,0,0,2050,
	2052,1,0,0,0,2051,2053,5,218,0,0,2052,2051,1,0,0,0,2052,2053,1,0,0,0,2053,
	2054,1,0,0,0,2054,2055,3,240,120,0,2055,239,1,0,0,0,2056,2059,3,244,122,
	0,2057,2058,5,218,0,0,2058,2060,3,266,133,0,2059,2057,1,0,0,0,2059,2060,
	1,0,0,0,2060,2063,1,0,0,0,2061,2062,5,218,0,0,2062,2064,3,268,134,0,2063,
	2061,1,0,0,0,2063,2064,1,0,0,0,2064,2067,1,0,0,0,2065,2066,5,218,0,0,2066,
	2068,3,270,135,0,2067,2065,1,0,0,0,2067,2068,1,0,0,0,2068,241,1,0,0,0,2069,
	2071,3,250,125,0,2070,2072,5,218,0,0,2071,2070,1,0,0,0,2071,2072,1,0,0,
	0,2072,2074,1,0,0,0,2073,2075,3,256,128,0,2074,2073,1,0,0,0,2074,2075,1,
	0,0,0,2075,243,1,0,0,0,2076,2087,5,19,0,0,2077,2079,5,218,0,0,2078,2077,
	1,0,0,0,2078,2079,1,0,0,0,2079,2080,1,0,0,0,2080,2082,5,15,0,0,2081,2083,
	5,218,0,0,2082,2081,1,0,0,0,2082,2083,1,0,0,0,2083,2084,1,0,0,0,2084,2086,
	3,246,123,0,2085,2078,1,0,0,0,2086,2089,1,0,0,0,2087,2085,1,0,0,0,2087,
	2088,1,0,0,0,2088,2106,1,0,0,0,2089,2087,1,0,0,0,2090,2101,3,246,123,0,
	2091,2093,5,218,0,0,2092,2091,1,0,0,0,2092,2093,1,0,0,0,2093,2094,1,0,0,
	0,2094,2096,5,15,0,0,2095,2097,5,218,0,0,2096,2095,1,0,0,0,2096,2097,1,
	0,0,0,2097,2098,1,0,0,0,2098,2100,3,246,123,0,2099,2092,1,0,0,0,2100,2103,
	1,0,0,0,2101,2099,1,0,0,0,2101,2102,1,0,0,0,2102,2106,1,0,0,0,2103,2101,
	1,0,0,0,2104,2106,3,242,121,0,2105,2076,1,0,0,0,2105,2090,1,0,0,0,2105,
	2104,1,0,0,0,2106,245,1,0,0,0,2107,2108,3,336,168,0,2108,2109,5,218,0,0,
	2109,2110,5,76,0,0,2110,2111,5,218,0,0,2111,2112,3,436,218,0,2112,2115,
	1,0,0,0,2113,2115,3,336,168,0,2114,2107,1,0,0,0,2114,2113,1,0,0,0,2115,
	247,1,0,0,0,2116,2117,5,129,0,0,2117,2118,5,218,0,0,2118,2120,3,250,125,
	0,2119,2121,5,218,0,0,2120,2119,1,0,0,0,2120,2121,1,0,0,0,2121,2123,1,0,
	0,0,2122,2124,3,256,128,0,2123,2122,1,0,0,0,2123,2124,1,0,0,0,2124,249,
	1,0,0,0,2125,2127,3,252,126,0,2126,2128,5,218,0,0,2127,2126,1,0,0,0,2127,
	2128,1,0,0,0,2128,2130,1,0,0,0,2129,2131,3,254,127,0,2130,2129,1,0,0,0,
	2130,2131,1,0,0,0,2131,251,1,0,0,0,2132,2133,3,474,237,0,2133,2134,3,424,
	212,0,2134,253,1,0,0,0,2135,2137,5,20,0,0,2136,2138,5,218,0,0,2137,2136,
	1,0,0,0,2137,2138,1,0,0,0,2138,2140,1,0,0,0,2139,2141,3,336,168,0,2140,
	2139,1,0,0,0,2140,2141,1,0,0,0,2141,2152,1,0,0,0,2142,2144,5,218,0,0,2143,
	2142,1,0,0,0,2143,2144,1,0,0,0,2144,2145,1,0,0,0,2145,2147,5,15,0,0,2146,
	2148,5,218,0,0,2147,2146,1,0,0,0,2147,2148,1,0,0,0,2148,2149,1,0,0,0,2149,
	2151,3,336,168,0,2150,2143,1,0,0,0,2151,2154,1,0,0,0,2152,2150,1,0,0,0,
	2152,2153,1,0,0,0,2153,2156,1,0,0,0,2154,2152,1,0,0,0,2155,2157,5,218,0,
	0,2156,2155,1,0,0,0,2156,2157,1,0,0,0,2157,2158,1,0,0,0,2158,2159,5,21,
	0,0,2159,255,1,0,0,0,2160,2161,5,130,0,0,2161,2162,5,218,0,0,2162,2173,
	3,258,129,0,2163,2165,5,218,0,0,2164,2163,1,0,0,0,2164,2165,1,0,0,0,2165,
	2166,1,0,0,0,2166,2168,5,15,0,0,2167,2169,5,218,0,0,2168,2167,1,0,0,0,2168,
	2169,1,0,0,0,2169,2170,1,0,0,0,2170,2172,3,258,129,0,2171,2164,1,0,0,0,
	2172,2175,1,0,0,0,2173,2171,1,0,0,0,2173,2174,1,0,0,0,2174,2178,1,0,0,0,
	2175,2173,1,0,0,0,2176,2177,5,218,0,0,2177,2179,3,294,147,0,2178,2176,1,
	0,0,0,2178,2179,1,0,0,0,2179,257,1,0,0,0,2180,2183,3,260,130,0,2181,2183,
	3,262,131,0,2182,2180,1,0,0,0,2182,2181,1,0,0,0,2183,259,1,0,0,0,2184,2185,
	3,264,132,0,2185,2186,5,218,0,0,2186,2187,5,76,0,0,2187,2188,5,218,0,0,
	2188,2189,3,436,218,0,2189,261,1,0,0,0,2190,2191,3,264,132,0,2191,263,1,
	0,0,0,2192,2193,3,482,241,0,2193,265,1,0,0,0,2194,2195,5,90,0,0,2195,2196,
	5,218,0,0,2196,2197,5,91,0,0,2197,2198,5,218,0,0,2198,2209,3,272,136,0,
	2199,2201,5,218,0,0,2200,2199,1,0,0,0,2200,2201,1,0,0,0,2201,2202,1,0,0,
	0,2202,2204,5,15,0,0,2203,2205,5,218,0,0,2204,2203,1,0,0,0,2204,2205,1,
	0,0,0,2205,2206,1,0,0,0,2206,2208,3,272,136,0,2207,2200,1,0,0,0,2208,2211,
	1,0,0,0,2209,2207,1,0,0,0,2209,2210,1,0,0,0,2210,267,1,0,0,0,2211,2209,
	1,0,0,0,2212,2213,5,92,0,0,2213,2214,5,218,0,0,2214,2215,3,336,168,0,2215,
	269,1,0,0,0,2216,2217,5,93,0,0,2217,2218,5,218,0,0,2218,2219,3,336,168,
	0,2219,271,1,0,0,0,2220,2228,3,336,168,0,2221,2223,5,218,0,0,2222,2221,
	1,0,0,0,2222,2223,1,0,0,0,2223,2224,1,0,0,0,2224,2226,7,13,0,0,2225,2227,
	5,218,0,0,2226,2225,1,0,0,0,2226,2227,1,0,0,0,2227,2229,1,0,0,0,2228,2222,
	1,0,0,0,2228,2229,1,0,0,0,2229,273,1,0,0,0,2230,2232,5,218,0,0,2231,2230,
	1,0,0,0,2231,2232,1,0,0,0,2232,2279,1,0,0,0,2233,2234,5,57,0,0,2234,2235,
	5,218,0,0,2235,2236,5,64,0,0,2236,2237,5,218,0,0,2237,2238,3,436,218,0,
	2238,2240,3,328,164,0,2239,2241,5,218,0,0,2240,2239,1,0,0,0,2240,2241,1,
	0,0,0,2241,2242,1,0,0,0,2242,2244,5,20,0,0,2243,2245,5,218,0,0,2244,2243,
	1,0,0,0,2244,2245,1,0,0,0,2245,2246,1,0,0,0,2246,2248,3,466,233,0,2247,
	2249,5,218,0,0,2248,2247,1,0,0,0,2248,2249,1,0,0,0,2249,2250,1,0,0,0,2250,
	2251,5,21,0,0,2251,2280,1,0,0,0,2252,2253,5,57,0,0,2253,2254,5,218,0,0,
	2254,2255,5,98,0,0,2255,2256,5,218,0,0,2256,2257,5,65,0,0,2257,2258,5,218,
	0,0,2258,2269,3,436,218,0,2259,2261,5,218,0,0,2260,2259,1,0,0,0,2260,2261,
	1,0,0,0,2261,2262,1,0,0,0,2262,2264,5,15,0,0,2263,2265,5,218,0,0,2264,2263,
	1,0,0,0,2264,2265,1,0,0,0,2265,2266,1,0,0,0,2266,2268,3,436,218,0,2267,
	2260,1,0,0,0,2268,2271,1,0,0,0,2269,2267,1,0,0,0,2269,2270,1,0,0,0,2270,
	2280,1,0,0,0,2271,2269,1,0,0,0,2272,2273,5,57,0,0,2273,2274,5,218,0,0,2274,
	2275,5,99,0,0,2275,2276,5,218,0,0,2276,2277,3,436,218,0,2277,2278,3,328,
	164,0,2278,2280,1,0,0,0,2279,2233,1,0,0,0,2279,2252,1,0,0,0,2279,2272,1,
	0,0,0,2280,275,1,0,0,0,2281,2282,5,100,0,0,2282,2283,5,218,0,0,2283,2294,
	3,278,139,0,2284,2286,5,218,0,0,2285,2284,1,0,0,0,2285,2286,1,0,0,0,2286,
	2287,1,0,0,0,2287,2289,5,15,0,0,2288,2290,5,218,0,0,2289,2288,1,0,0,0,2289,
	2290,1,0,0,0,2290,2291,1,0,0,0,2291,2293,3,278,139,0,2292,2285,1,0,0,0,
	2293,2296,1,0,0,0,2294,2292,1,0,0,0,2294,2295,1,0,0,0,2295,2298,1,0,0,0,
	2296,2294,1,0,0,0,2297,2299,3,294,147,0,2298,2297,1,0,0,0,2298,2299,1,0,
	0,0,2299,277,1,0,0,0,2300,2302,3,436,218,0,2301,2303,5,218,0,0,2302,2301,
	1,0,0,0,2302,2303,1,0,0,0,2303,2304,1,0,0,0,2304,2306,5,12,0,0,2305,2307,
	5,218,0,0,2306,2305,1,0,0,0,2306,2307,1,0,0,0,2307,2308,1,0,0,0,2308,2309,
	3,280,140,0,2309,279,1,0,0,0,2310,2313,3,282,141,0,2311,2313,3,284,142,
	0,2312,2310,1,0,0,0,2312,2311,1,0,0,0,2313,281,1,0,0,0,2314,2316,5,101,
	0,0,2315,2317,5,218,0,0,2316,2315,1,0,0,0,2316,2317,1,0,0,0,2317,2321,1,
	0,0,0,2318,2322,3,286,143,0,2319,2322,3,288,144,0,2320,2322,3,290,145,0,
	2321,2318,1,0,0,0,2321,2319,1,0,0,0,2321,2320,1,0,0,0,2322,283,1,0,0,0,
	2323,2327,7,14,0,0,2324,2328,3,286,143,0,2325,2328,3,288,144,0,2326,2328,
	3,290,145,0,2327,2324,1,0,0,0,2327,2325,1,0,0,0,2327,2326,1,0,0,0,2328,
	285,1,0,0,0,2329,2330,5,2,0,0,2330,2331,3,482,241,0,2331,2332,5,20,0,0,
	2332,2333,3,482,241,0,2333,2336,5,12,0,0,2334,2337,5,199,0,0,2335,2337,
	3,454,227,0,2336,2334,1,0,0,0,2336,2335,1,0,0,0,2337,2338,1,0,0,0,2338,
	2339,5,21,0,0,2339,287,1,0,0,0,2340,2341,5,2,0,0,2341,2342,3,482,241,0,
	2342,2345,5,20,0,0,2343,2346,5,199,0,0,2344,2346,3,454,227,0,2345,2343,
	1,0,0,0,2345,2344,1,0,0,0,2346,2347,1,0,0,0,2347,2348,5,21,0,0,2348,289,
	1,0,0,0,2349,2353,5,20,0,0,2350,2354,3,292,146,0,2351,2354,3,454,227,0,
	2352,2354,5,19,0,0,2353,2350,1,0,0,0,2353,2351,1,0,0,0,2353,2352,1,0,0,
	0,2354,2355,1,0,0,0,2355,2356,5,21,0,0,2356,291,1,0,0,0,2357,2368,3,470,
	235,0,2358,2360,5,218,0,0,2359,2358,1,0,0,0,2359,2360,1,0,0,0,2360,2361,
	1,0,0,0,2361,2363,5,15,0,0,2362,2364,5,218,0,0,2363,2362,1,0,0,0,2363,2364,
	1,0,0,0,2364,2365,1,0,0,0,2365,2367,3,470,235,0,2366,2359,1,0,0,0,2367,
	2370,1,0,0,0,2368,2366,1,0,0,0,2368,2369,1,0,0,0,2369,293,1,0,0,0,2370,
	2368,1,0,0,0,2371,2372,5,104,0,0,2372,2373,5,218,0,0,2373,2374,3,336,168,
	0,2374,295,1,0,0,0,2375,2386,3,298,149,0,2376,2378,5,218,0,0,2377,2376,
	1,0,0,0,2377,2378,1,0,0,0,2378,2379,1,0,0,0,2379,2381,5,15,0,0,2380,2382,
	5,218,0,0,2381,2380,1,0,0,0,2381,2382,1,0,0,0,2382,2383,1,0,0,0,2383,2385,
	3,298,149,0,2384,2377,1,0,0,0,2385,2388,1,0,0,0,2386,2384,1,0,0,0,2386,
	2387,1,0,0,0,2387,297,1,0,0,0,2388,2386,1,0,0,0,2389,2391,3,436,218,0,2390,
	2392,5,218,0,0,2391,2390,1,0,0,0,2391,2392,1,0,0,0,2392,2393,1,0,0,0,2393,
	2395,5,12,0,0,2394,2396,5,218,0,0,2395,2394,1,0,0,0,2395,2396,1,0,0,0,2396,
	2397,1,0,0,0,2397,2398,3,300,150,0,2398,2401,1,0,0,0,2399,2401,3,300,150,
	0,2400,2389,1,0,0,0,2400,2399,1,0,0,0,2401,299,1,0,0,0,2402,2405,3,392,
	196,0,2403,2405,3,302,151,0,2404,2402,1,0,0,0,2404,2403,1,0,0,0,2405,301,
	1,0,0,0,2406,2413,3,304,152,0,2407,2409,5,218,0,0,2408,2407,1,0,0,0,2408,
	2409,1,0,0,0,2409,2410,1,0,0,0,2410,2412,3,306,153,0,2411,2408,1,0,0,0,
	2412,2415,1,0,0,0,2413,2411,1,0,0,0,2413,2414,1,0,0,0,2414,2421,1,0,0,0,
	2415,2413,1,0,0,0,2416,2417,5,20,0,0,2417,2418,3,302,151,0,2418,2419,5,
	21,0,0,2419,2421,1,0,0,0,2420,2406,1,0,0,0,2420,2416,1,0,0,0,2421,303,1,
	0,0,0,2422,2424,5,20,0,0,2423,2425,5,218,0,0,2424,2423,1,0,0,0,2424,2425,
	1,0,0,0,2425,2430,1,0,0,0,2426,2428,3,436,218,0,2427,2429,5,218,0,0,2428,
	2427,1,0,0,0,2428,2429,1,0,0,0,2429,2431,1,0,0,0,2430,2426,1,0,0,0,2430,
	2431,1,0,0,0,2431,2436,1,0,0,0,2432,2434,3,326,163,0,2433,2435,5,218,0,
	0,2434,2433,1,0,0,0,2434,2435,1,0,0,0,2435,2437,1,0,0,0,2436,2432,1,0,0,
	0,2436,2437,1,0,0,0,2437,2442,1,0,0,0,2438,2440,3,316,158,0,2439,2441,5,
	218,0,0,2440,2439,1,0,0,0,2440,2441,1,0,0,0,2441,2443,1,0,0,0,2442,2438,
	1,0,0,0,2442,2443,1,0,0,0,2443,2444,1,0,0,0,2444,2445,5,21,0,0,2445,305,
	1,0,0,0,2446,2448,3,308,154,0,2447,2449,5,218,0,0,2448,2447,1,0,0,0,2448,
	2449,1,0,0,0,2449,2450,1,0,0,0,2450,2451,3,304,152,0,2451,307,1,0,0,0,2452,
	2454,3,310,155,0,2453,2455,5,218,0,0,2454,2453,1,0,0,0,2454,2455,1,0,0,
	0,2455,2457,1,0,0,0,2456,2458,3,314,157,0,2457,2456,1,0,0,0,2457,2458,1,
	0,0,0,2458,2460,1,0,0,0,2459,2461,5,218,0,0,2460,2459,1,0,0,0,2460,2461,
	1,0,0,0,2461,2462,1,0,0,0,2462,2463,3,312,156,0,2463,309,1,0,0,0,2464,2466,
	3,476,238,0,2465,2467,5,218,0,0,2466,2465,1,0,0,0,2466,2467,1,0,0,0,2467,
	2468,1,0,0,0,2468,2469,3,480,240,0,2469,2472,1,0,0,0,2470,2472,3,480,240,
	0,2471,2464,1,0,0,0,2471,2470,1,0,0,0,2472,311,1,0,0,0,2473,2475,3,480,
	240,0,2474,2476,5,218,0,0,2475,2474,1,0,0,0,2475,2476,1,0,0,0,2476,2477,
	1,0,0,0,2477,2478,3,478,239,0,2478,2481,1,0,0,0,2479,2481,3,480,240,0,2480,
	2473,1,0,0,0,2480,2479,1,0,0,0,2481,313,1,0,0,0,2482,2484,5,17,0,0,2483,
	2485,5,218,0,0,2484,2483,1,0,0,0,2484,2485,1,0,0,0,2485,2490,1,0,0,0,2486,
	2488,3,436,218,0,2487,2489,5,218,0,0,2488,2487,1,0,0,0,2488,2489,1,0,0,
	0,2489,2491,1,0,0,0,2490,2486,1,0,0,0,2490,2491,1,0,0,0,2491,2496,1,0,0,
	0,2492,2494,3,320,160,0,2493,2495,5,218,0,0,2494,2493,1,0,0,0,2494,2495,
	1,0,0,0,2495,2497,1,0,0,0,2496,2492,1,0,0,0,2496,2497,1,0,0,0,2497,2499,
	1,0,0,0,2498,2500,3,330,165,0,2499,2498,1,0,0,0,2499,2500,1,0,0,0,2500,
	2505,1,0,0,0,2501,2503,3,316,158,0,2502,2504,5,218,0,0,2503,2502,1,0,0,
	0,2503,2504,1,0,0,0,2504,2506,1,0,0,0,2505,2501,1,0,0,0,2505,2506,1,0,0,
	0,2506,2507,1,0,0,0,2507,2508,5,18,0,0,2508,315,1,0,0,0,2509,2512,3,440,
	220,0,2510,2512,3,454,227,0,2511,2509,1,0,0,0,2511,2510,1,0,0,0,2512,317,
	1,0,0,0,2513,2515,5,2,0,0,2514,2516,5,218,0,0,2515,2514,1,0,0,0,2515,2516,
	1,0,0,0,2516,2517,1,0,0,0,2517,2518,3,334,167,0,2518,319,1,0,0,0,2519,2527,
	3,322,161,0,2520,2522,5,218,0,0,2521,2520,1,0,0,0,2521,2522,1,0,0,0,2522,
	2523,1,0,0,0,2523,2524,5,23,0,0,2524,2526,3,324,162,0,2525,2521,1,0,0,0,
	2526,2529,1,0,0,0,2527,2525,1,0,0,0,2527,2528,1,0,0,0,2528,321,1,0,0,0,
	2529,2527,1,0,0,0,2530,2531,5,2,0,0,2531,2532,3,334,167,0,2532,323,1,0,
	0,0,2533,2535,5,2,0,0,2534,2533,1,0,0,0,2534,2535,1,0,0,0,2535,2536,1,0,
	0,0,2536,2537,3,334,167,0,2537,325,1,0,0,0,2538,2545,3,328,164,0,2539,2541,
	5,218,0,0,2540,2539,1,0,0,0,2540,2541,1,0,0,0,2541,2542,1,0,0,0,2542,2544,
	3,328,164,0,2543,2540,1,0,0,0,2544,2547,1,0,0,0,2545,2543,1,0,0,0,2545,
	2546,1,0,0,0,2546,327,1,0,0,0,2547,2545,1,0,0,0,2548,2549,5,2,0,0,2549,
	2550,3,332,166,0,2550,329,1,0,0,0,2551,2553,5,19,0,0,2552,2554,5,218,0,
	0,2553,2552,1,0,0,0,2553,2554,1,0,0,0,2554,2559,1,0,0,0,2555,2557,3,470,
	235,0,2556,2558,5,218,0,0,2557,2556,1,0,0,0,2557,2558,1,0,0,0,2558,2560,
	1,0,0,0,2559,2555,1,0,0,0,2559,2560,1,0,0,0,2560,2571,1,0,0,0,2561,2563,
	5,24,0,0,2562,2564,5,218,0,0,2563,2562,1,0,0,0,2563,2564,1,0,0,0,2564,2569,
	1,0,0,0,2565,2567,3,470,235,0,2566,2568,5,218,0,0,2567,2566,1,0,0,0,2567,
	2568,1,0,0,0,2568,2570,1,0,0,0,2569,2565,1,0,0,0,2569,2570,1,0,0,0,2570,
	2572,1,0,0,0,2571,2561,1,0,0,0,2571,2572,1,0,0,0,2572,331,1,0,0,0,2573,
	2574,3,482,241,0,2574,333,1,0,0,0,2575,2576,3,482,241,0,2576,335,1,0,0,
	0,2577,2578,3,338,169,0,2578,337,1,0,0,0,2579,2586,3,340,170,0,2580,2581,
	5,218,0,0,2581,2582,5,107,0,0,2582,2583,5,218,0,0,2583,2585,3,340,170,0,
	2584,2580,1,0,0,0,2585,2588,1,0,0,0,2586,2584,1,0,0,0,2586,2587,1,0,0,0,
	2587,339,1,0,0,0,2588,2586,1,0,0,0,2589,2596,3,342,171,0,2590,2591,5,218,
	0,0,2591,2592,5,108,0,0,2592,2593,5,218,0,0,2593,2595,3,342,171,0,2594,
	2590,1,0,0,0,2595,2598,1,0,0,0,2596,2594,1,0,0,0,2596,2597,1,0,0,0,2597,
	341,1,0,0,0,2598,2596,1,0,0,0,2599,2606,3,344,172,0,2600,2601,5,218,0,0,
	2601,2602,5,109,0,0,2602,2603,5,218,0,0,2603,2605,3,344,172,0,2604,2600,
	1,0,0,0,2605,2608,1,0,0,0,2606,2604,1,0,0,0,2606,2607,1,0,0,0,2607,343,
	1,0,0,0,2608,2606,1,0,0,0,2609,2611,5,110,0,0,2610,2612,5,218,0,0,2611,
	2610,1,0,0,0,2611,2612,1,0,0,0,2612,2614,1,0,0,0,2613,2609,1,0,0,0,2614,
	2617,1,0,0,0,2615,2613,1,0,0,0,2615,2616,1,0,0,0,2616,2618,1,0,0,0,2617,
	2615,1,0,0,0,2618,2619,3,346,173,0,2619,345,1,0,0,0,2620,2627,3,348,174,
	0,2621,2623,5,218,0,0,2622,2621,1,0,0,0,2622,2623,1,0,0,0,2623,2624,1,0,
	0,0,2624,2626,3,408,204,0,2625,2622,1,0,0,0,2626,2629,1,0,0,0,2627,2625,
	1,0,0,0,2627,2628,1,0,0,0,2628,347,1,0,0,0,2629,2627,1,0,0,0,2630,2649,
	3,350,175,0,2631,2633,5,218,0,0,2632,2631,1,0,0,0,2632,2633,1,0,0,0,2633,
	2634,1,0,0,0,2634,2636,5,13,0,0,2635,2637,5,218,0,0,2636,2635,1,0,0,0,2636,
	2637,1,0,0,0,2637,2638,1,0,0,0,2638,2648,3,350,175,0,2639,2641,5,218,0,
	0,2640,2639,1,0,0,0,2640,2641,1,0,0,0,2641,2642,1,0,0,0,2642,2644,5,3,0,
	0,2643,2645,5,218,0,0,2644,2643,1,0,0,0,2644,2645,1,0,0,0,2645,2646,1,0,
	0,0,2646,2648,3,350,175,0,2647,2632,1,0,0,0,2647,2640,1,0,0,0,2648,2651,
	1,0,0,0,2649,2647,1,0,0,0,2649,2650,1,0,0,0,2650,349,1,0,0,0,2651,2649,
	1,0,0,0,2652,2679,3,352,176,0,2653,2655,5,218,0,0,2654,2653,1,0,0,0,2654,
	2655,1,0,0,0,2655,2656,1,0,0,0,2656,2658,5,19,0,0,2657,2659,5,218,0,0,2658,
	2657,1,0,0,0,2658,2659,1,0,0,0,2659,2660,1,0,0,0,2660,2678,3,352,176,0,
	2661,2663,5,218,0,0,2662,2661,1,0,0,0,2662,2663,1,0,0,0,2663,2664,1,0,0,
	0,2664,2666,5,6,0,0,2665,2667,5,218,0,0,2666,2665,1,0,0,0,2666,2667,1,0,
	0,0,2667,2668,1,0,0,0,2668,2678,3,352,176,0,2669,2671,5,218,0,0,2670,2669,
	1,0,0,0,2670,2671,1,0,0,0,2671,2672,1,0,0,0,2672,2674,5,25,0,0,2673,2675,
	5,218,0,0,2674,2673,1,0,0,0,2674,2675,1,0,0,0,2675,2676,1,0,0,0,2676,2678,
	3,352,176,0,2677,2654,1,0,0,0,2677,2662,1,0,0,0,2677,2670,1,0,0,0,2678,
	2681,1,0,0,0,2679,2677,1,0,0,0,2679,2680,1,0,0,0,2680,351,1,0,0,0,2681,
	2679,1,0,0,0,2682,2693,3,354,177,0,2683,2685,5,218,0,0,2684,2683,1,0,0,
	0,2684,2685,1,0,0,0,2685,2686,1,0,0,0,2686,2688,5,26,0,0,2687,2689,5,218,
	0,0,2688,2687,1,0,0,0,2688,2689,1,0,0,0,2689,2690,1,0,0,0,2690,2692,3,354,
	177,0,2691,2684,1,0,0,0,2692,2695,1,0,0,0,2693,2691,1,0,0,0,2693,2694,1,
	0,0,0,2694,353,1,0,0,0,2695,2693,1,0,0,0,2696,2698,7,15,0,0,2697,2699,5,
	218,0,0,2698,2697,1,0,0,0,2698,2699,1,0,0,0,2699,2701,1,0,0,0,2700,2696,
	1,0,0,0,2701,2704,1,0,0,0,2702,2700,1,0,0,0,2702,2703,1,0,0,0,2703,2705,
	1,0,0,0,2704,2702,1,0,0,0,2705,2706,3,356,178,0,2706,355,1,0,0,0,2707,2761,
	3,358,179,0,2708,2710,5,218,0,0,2709,2708,1,0,0,0,2709,2710,1,0,0,0,2710,
	2711,1,0,0,0,2711,2712,5,17,0,0,2712,2713,3,336,168,0,2713,2714,5,18,0,
	0,2714,2760,1,0,0,0,2715,2717,5,218,0,0,2716,2715,1,0,0,0,2716,2717,1,0,
	0,0,2717,2718,1,0,0,0,2718,2720,5,17,0,0,2719,2721,3,336,168,0,2720,2719,
	1,0,0,0,2720,2721,1,0,0,0,2721,2722,1,0,0,0,2722,2724,5,24,0,0,2723,2725,
	3,336,168,0,2724,2723,1,0,0,0,2724,2725,1,0,0,0,2725,2726,1,0,0,0,2726,
	2760,5,18,0,0,2727,2729,5,218,0,0,2728,2727,1,0,0,0,2728,2729,1,0,0,0,2729,
	2730,1,0,0,0,2730,2744,5,27,0,0,2731,2732,5,218,0,0,2732,2744,5,87,0,0,
	2733,2734,5,218,0,0,2734,2735,5,111,0,0,2735,2736,5,218,0,0,2736,2744,5,
	73,0,0,2737,2738,5,218,0,0,2738,2739,5,112,0,0,2739,2740,5,218,0,0,2740,
	2744,5,73,0,0,2741,2742,5,218,0,0,2742,2744,5,113,0,0,2743,2728,1,0,0,0,
	2743,2731,1,0,0,0,2743,2733,1,0,0,0,2743,2737,1,0,0,0,2743,2741,1,0,0,0,
	2744,2746,1,0,0,0,2745,2747,5,218,0,0,2746,2745,1,0,0,0,2746,2747,1,0,0,
	0,2747,2748,1,0,0,0,2748,2760,3,358,179,0,2749,2750,5,218,0,0,2750,2751,
	5,68,0,0,2751,2752,5,218,0,0,2752,2760,5,114,0,0,2753,2754,5,218,0,0,2754,
	2755,5,68,0,0,2755,2756,5,218,0,0,2756,2757,5,110,0,0,2757,2758,5,218,0,
	0,2758,2760,5,114,0,0,2759,2709,1,0,0,0,2759,2716,1,0,0,0,2759,2743,1,0,
	0,0,2759,2749,1,0,0,0,2759,2753,1,0,0,0,2760,2763,1,0,0,0,2761,2759,1,0,
	0,0,2761,2762,1,0,0,0,2762,357,1,0,0,0,2763,2761,1,0,0,0,2764,2774,3,398,
	199,0,2765,2767,5,218,0,0,2766,2765,1,0,0,0,2766,2767,1,0,0,0,2767,2770,
	1,0,0,0,2768,2771,3,430,215,0,2769,2771,3,326,163,0,2770,2768,1,0,0,0,2770,
	2769,1,0,0,0,2771,2773,1,0,0,0,2772,2766,1,0,0,0,2773,2776,1,0,0,0,2774,
	2772,1,0,0,0,2774,2775,1,0,0,0,2775,359,1,0,0,0,2776,2774,1,0,0,0,2777,
	2779,3,362,181,0,2778,2780,5,218,0,0,2779,2778,1,0,0,0,2779,2780,1,0,0,
	0,2780,2781,1,0,0,0,2781,2783,5,20,0,0,2782,2784,5,218,0,0,2783,2782,1,
	0,0,0,2783,2784,1,0,0,0,2784,2785,1,0,0,0,2785,2787,3,414,207,0,2786,2788,
	5,218,0,0,2787,2786,1,0,0,0,2787,2788,1,0,0,0,2788,2789,1,0,0,0,2789,2790,
	5,21,0,0,2790,361,1,0,0,0,2791,2792,5,116,0,0,2792,363,1,0,0,0,2793,2795,
	3,366,183,0,2794,2796,5,218,0,0,2795,2794,1,0,0,0,2795,2796,1,0,0,0,2796,
	2797,1,0,0,0,2797,2799,5,20,0,0,2798,2800,5,218,0,0,2799,2798,1,0,0,0,2799,
	2800,1,0,0,0,2800,2801,1,0,0,0,2801,2803,3,336,168,0,2802,2804,5,218,0,
	0,2803,2802,1,0,0,0,2803,2804,1,0,0,0,2804,2805,1,0,0,0,2805,2806,5,21,
	0,0,2806,365,1,0,0,0,2807,2808,5,70,0,0,2808,367,1,0,0,0,2809,2811,3,370,
	185,0,2810,2812,5,218,0,0,2811,2810,1,0,0,0,2811,2812,1,0,0,0,2812,2813,
	1,0,0,0,2813,2815,5,20,0,0,2814,2816,5,218,0,0,2815,2814,1,0,0,0,2815,2816,
	1,0,0,0,2816,2817,1,0,0,0,2817,2819,3,414,207,0,2818,2820,5,218,0,0,2819,
	2818,1,0,0,0,2819,2820,1,0,0,0,2820,2821,1,0,0,0,2821,2822,5,21,0,0,2822,
	369,1,0,0,0,2823,2824,5,61,0,0,2824,371,1,0,0,0,2825,2827,3,374,187,0,2826,
	2828,5,218,0,0,2827,2826,1,0,0,0,2827,2828,1,0,0,0,2828,2829,1,0,0,0,2829,
	2831,5,20,0,0,2830,2832,5,218,0,0,2831,2830,1,0,0,0,2831,2832,1,0,0,0,2832,
	2833,1,0,0,0,2833,2835,3,414,207,0,2834,2836,5,218,0,0,2835,2834,1,0,0,
	0,2835,2836,1,0,0,0,2836,2837,1,0,0,0,2837,2838,5,21,0,0,2838,373,1,0,0,
	0,2839,2840,5,118,0,0,2840,375,1,0,0,0,2841,2843,3,378,189,0,2842,2844,
	5,218,0,0,2843,2842,1,0,0,0,2843,2844,1,0,0,0,2844,2845,1,0,0,0,2845,2847,
	5,20,0,0,2846,2848,5,218,0,0,2847,2846,1,0,0,0,2847,2848,1,0,0,0,2848,2849,
	1,0,0,0,2849,2851,3,414,207,0,2850,2852,5,218,0,0,2851,2850,1,0,0,0,2851,
	2852,1,0,0,0,2852,2853,1,0,0,0,2853,2854,5,21,0,0,2854,377,1,0,0,0,2855,
	2856,5,119,0,0,2856,379,1,0,0,0,2857,2859,3,382,191,0,2858,2860,5,218,0,
	0,2859,2858,1,0,0,0,2859,2860,1,0,0,0,2860,2861,1,0,0,0,2861,2863,5,20,
	0,0,2862,2864,5,218,0,0,2863,2862,1,0,0,0,2863,2864,1,0,0,0,2864,2865,1,
	0,0,0,2865,2867,3,414,207,0,2866,2868,5,218,0,0,2867,2866,1,0,0,0,2867,
	2868,1,0,0,0,2868,2869,1,0,0,0,2869,2870,5,21,0,0,2870,381,1,0,0,0,2871,
	2872,5,120,0,0,2872,383,1,0,0,0,2873,2875,3,386,193,0,2874,2876,5,218,0,
	0,2875,2874,1,0,0,0,2875,2876,1,0,0,0,2876,2877,1,0,0,0,2877,2879,5,20,
	0,0,2878,2880,5,218,0,0,2879,2878,1,0,0,0,2879,2880,1,0,0,0,2880,2881,1,
	0,0,0,2881,2890,3,414,207,0,2882,2884,5,218,0,0,2883,2882,1,0,0,0,2883,
	2884,1,0,0,0,2884,2885,1,0,0,0,2885,2887,5,23,0,0,2886,2888,5,218,0,0,2887,
	2886,1,0,0,0,2887,2888,1,0,0,0,2888,2889,1,0,0,0,2889,2891,3,336,168,0,
	2890,2883,1,0,0,0,2890,2891,1,0,0,0,2891,2893,1,0,0,0,2892,2894,5,218,0,
	0,2893,2892,1,0,0,0,2893,2894,1,0,0,0,2894,2895,1,0,0,0,2895,2896,5,21,
	0,0,2896,385,1,0,0,0,2897,2898,5,117,0,0,2898,387,1,0,0,0,2899,2901,3,390,
	195,0,2900,2902,5,218,0,0,2901,2900,1,0,0,0,2901,2902,1,0,0,0,2902,2903,
	1,0,0,0,2903,2905,5,20,0,0,2904,2906,5,218,0,0,2905,2904,1,0,0,0,2905,2906,
	1,0,0,0,2906,2907,1,0,0,0,2907,2909,3,436,218,0,2908,2910,5,218,0,0,2909,
	2908,1,0,0,0,2909,2910,1,0,0,0,2910,2911,1,0,0,0,2911,2913,5,12,0,0,2912,
	2914,5,218,0,0,2913,2912,1,0,0,0,2913,2914,1,0,0,0,2914,2915,1,0,0,0,2915,
	2917,3,336,168,0,2916,2918,5,218,0,0,2917,2916,1,0,0,0,2917,2918,1,0,0,
	0,2918,2919,1,0,0,0,2919,2921,5,15,0,0,2920,2922,5,218,0,0,2921,2920,1,
	0,0,0,2921,2922,1,0,0,0,2922,2923,1,0,0,0,2923,2925,3,416,208,0,2924,2926,
	5,218,0,0,2925,2924,1,0,0,0,2925,2926,1,0,0,0,2926,2927,1,0,0,0,2927,2929,
	5,23,0,0,2928,2930,5,218,0,0,2929,2928,1,0,0,0,2929,2930,1,0,0,0,2930,2931,
	1,0,0,0,2931,2933,3,336,168,0,2932,2934,5,218,0,0,2933,2932,1,0,0,0,2933,
	2934,1,0,0,0,2934,2935,1,0,0,0,2935,2936,5,21,0,0,2936,389,1,0,0,0,2937,
	2938,5,123,0,0,2938,391,1,0,0,0,2939,2941,3,394,197,0,2940,2942,5,218,0,
	0,2941,2940,1,0,0,0,2941,2942,1,0,0,0,2942,2943,1,0,0,0,2943,2945,5,20,
	0,0,2944,2946,5,218,0,0,2945,2944,1,0,0,0,2945,2946,1,0,0,0,2946,2947,1,
	0,0,0,2947,2949,3,302,151,0,2948,2950,5,218,0,0,2949,2948,1,0,0,0,2949,
	2950,1,0,0,0,2950,2951,1,0,0,0,2951,2952,5,21,0,0,2952,2968,1,0,0,0,2953,
	2955,3,396,198,0,2954,2956,5,218,0,0,2955,2954,1,0,0,0,2955,2956,1,0,0,
	0,2956,2957,1,0,0,0,2957,2959,5,20,0,0,2958,2960,5,218,0,0,2959,2958,1,
	0,0,0,2959,2960,1,0,0,0,2960,2961,1,0,0,0,2961,2963,3,302,151,0,2962,2964,
	5,218,0,0,2963,2962,1,0,0,0,2963,2964,1,0,0,0,2964,2965,1,0,0,0,2965,2966,
	5,21,0,0,2966,2968,1,0,0,0,2967,2939,1,0,0,0,2967,2953,1,0,0,0,2968,393,
	1,0,0,0,2969,2970,5,105,0,0,2970,395,1,0,0,0,2971,2972,5,106,0,0,2972,397,
	1,0,0,0,2973,3005,3,400,200,0,2974,3005,3,454,227,0,2975,3005,3,432,216,
	0,2976,2978,5,115,0,0,2977,2979,5,218,0,0,2978,2977,1,0,0,0,2978,2979,1,
	0,0,0,2979,2980,1,0,0,0,2980,2982,5,20,0,0,2981,2983,5,218,0,0,2982,2981,
	1,0,0,0,2982,2983,1,0,0,0,2983,2984,1,0,0,0,2984,2986,5,19,0,0,2985,2987,
	5,218,0,0,2986,2985,1,0,0,0,2986,2987,1,0,0,0,2987,2988,1,0,0,0,2988,3005,
	5,21,0,0,2989,3005,3,426,213,0,2990,3005,3,428,214,0,2991,3005,3,360,180,
	0,2992,3005,3,384,192,0,2993,3005,3,388,194,0,2994,3005,3,368,184,0,2995,
	3005,3,372,186,0,2996,3005,3,376,188,0,2997,3005,3,380,190,0,2998,3005,
	3,364,182,0,2999,3005,3,392,196,0,3000,3005,3,412,206,0,3001,3005,3,410,
	205,0,3002,3005,3,418,209,0,3003,3005,3,436,218,0,3004,2973,1,0,0,0,3004,
	2974,1,0,0,0,3004,2975,1,0,0,0,3004,2976,1,0,0,0,3004,2989,1,0,0,0,3004,
	2990,1,0,0,0,3004,2991,1,0,0,0,3004,2992,1,0,0,0,3004,2993,1,0,0,0,3004,
	2994,1,0,0,0,3004,2995,1,0,0,0,3004,2996,1,0,0,0,3004,2997,1,0,0,0,3004,
	2998,1,0,0,0,3004,2999,1,0,0,0,3004,3000,1,0,0,0,3004,3001,1,0,0,0,3004,
	3002,1,0,0,0,3004,3003,1,0,0,0,3005,399,1,0,0,0,3006,3014,3,438,219,0,3007,
	3014,3,402,201,0,3008,3014,3,404,202,0,3009,3014,5,114,0,0,3010,3014,3,
	440,220,0,3011,3014,3,406,203,0,3012,3014,3,442,221,0,3013,3006,1,0,0,0,
	3013,3007,1,0,0,0,3013,3008,1,0,0,0,3013,3009,1,0,0,0,3013,3010,1,0,0,0,
	3013,3011,1,0,0,0,3013,3012,1,0,0,0,3014,401,1,0,0,0,3015,3016,5,199,0,
	0,3016,403,1,0,0,0,3017,3018,7,16,0,0,3018,405,1,0,0,0,3019,3021,5,17,0,
	0,3020,3022,5,218,0,0,3021,3020,1,0,0,0,3021,3022,1,0,0,0,3022,3040,1,0,
	0,0,3023,3025,3,336,168,0,3024,3026,5,218,0,0,3025,3024,1,0,0,0,3025,3026,
	1,0,0,0,3026,3037,1,0,0,0,3027,3029,5,15,0,0,3028,3030,5,218,0,0,3029,3028,
	1,0,0,0,3029,3030,1,0,0,0,3030,3031,1,0,0,0,3031,3033,3,336,168,0,3032,
	3034,5,218,0,0,3033,3032,1,0,0,0,3033,3034,1,0,0,0,3034,3036,1,0,0,0,3035,
	3027,1,0,0,0,3036,3039,1,0,0,0,3037,3035,1,0,0,0,3037,3038,1,0,0,0,3038,
	3041,1,0,0,0,3039,3037,1,0,0,0,3040,3023,1,0,0,0,3040,3041,1,0,0,0,3041,
	3042,1,0,0,0,3042,3043,5,18,0,0,3043,407,1,0,0,0,3044,3046,5,12,0,0,3045,
	3047,5,218,0,0,3046,3045,1,0,0,0,3046,3047,1,0,0,0,3047,3048,1,0,0,0,3048,
	3080,3,348,174,0,3049,3051,5,28,0,0,3050,3052,5,218,0,0,3051,3050,1,0,0,
	0,3051,3052,1,0,0,0,3052,3053,1,0,0,0,3053,3080,3,348,174,0,3054,3056,5,
	29,0,0,3055,3057,5,218,0,0,3056,3055,1,0,0,0,3056,3057,1,0,0,0,3057,3058,
	1,0,0,0,3058,3080,3,348,174,0,3059,3061,5,30,0,0,3060,3062,5,218,0,0,3061,
	3060,1,0,0,0,3061,3062,1,0,0,0,3062,3063,1,0,0,0,3063,3080,3,348,174,0,
	3064,3066,5,31,0,0,3065,3067,5,218,0,0,3066,3065,1,0,0,0,3066,3067,1,0,
	0,0,3067,3068,1,0,0,0,3068,3080,3,348,174,0,3069,3071,5,32,0,0,3070,3072,
	5,218,0,0,3071,3070,1,0,0,0,3071,3072,1,0,0,0,3072,3073,1,0,0,0,3073,3080,
	3,348,174,0,3074,3076,5,33,0,0,3075,3077,5,218,0,0,3076,3075,1,0,0,0,3076,
	3077,1,0,0,0,3077,3078,1,0,0,0,3078,3080,3,348,174,0,3079,3044,1,0,0,0,
	3079,3049,1,0,0,0,3079,3054,1,0,0,0,3079,3059,1,0,0,0,3079,3064,1,0,0,0,
	3079,3069,1,0,0,0,3079,3074,1,0,0,0,3080,409,1,0,0,0,3081,3083,5,20,0,0,
	3082,3084,5,218,0,0,3083,3082,1,0,0,0,3083,3084,1,0,0,0,3084,3085,1,0,0,
	0,3085,3087,3,336,168,0,3086,3088,5,218,0,0,3087,3086,1,0,0,0,3087,3088,
	1,0,0,0,3088,3089,1,0,0,0,3089,3090,5,21,0,0,3090,411,1,0,0,0,3091,3096,
	3,304,152,0,3092,3094,5,218,0,0,3093,3092,1,0,0,0,3093,3094,1,0,0,0,3094,
	3095,1,0,0,0,3095,3097,3,306,153,0,3096,3093,1,0,0,0,3097,3098,1,0,0,0,
	3098,3096,1,0,0,0,3098,3099,1,0,0,0,3099,413,1,0,0,0,3100,3105,3,416,208,
	0,3101,3103,5,218,0,0,3102,3101,1,0,0,0,3102,3103,1,0,0,0,3103,3104,1,0,
	0,0,3104,3106,3,294,147,0,3105,3102,1,0,0,0,3105,3106,1,0,0,0,3106,415,
	1,0,0,0,3107,3108,3,436,218,0,3108,3109,5,218,0,0,3109,3110,5,87,0,0,3110,
	3111,5,218,0,0,3111,3112,3,336,168,0,3112,417,1,0,0,0,3113,3115,3,420,210,
	0,3114,3116,5,218,0,0,3115,3114,1,0,0,0,3115,3116,1,0,0,0,3116,3117,1,0,
	0,0,3117,3119,5,20,0,0,3118,3120,5,218,0,0,3119,3118,1,0,0,0,3119,3120,
	1,0,0,0,3120,3125,1,0,0,0,3121,3123,5,88,0,0,3122,3124,5,218,0,0,3123,3122,
	1,0,0,0,3123,3124,1,0,0,0,3124,3126,1,0,0,0,3125,3121,1,0,0,0,3125,3126,
	1,0,0,0,3126,3144,1,0,0,0,3127,3129,3,336,168,0,3128,3130,5,218,0,0,3129,
	3128,1,0,0,0,3129,3130,1,0,0,0,3130,3141,1,0,0,0,3131,3133,5,15,0,0,3132,
	3134,5,218,0,0,3133,3132,1,0,0,0,3133,3134,1,0,0,0,3134,3135,1,0,0,0,3135,
	3137,3,336,168,0,3136,3138,5,218,0,0,3137,3136,1,0,0,0,3137,3138,1,0,0,
	0,3138,3140,1,0,0,0,3139,3131,1,0,0,0,3140,3143,1,0,0,0,3141,3139,1,0,0,
	0,3141,3142,1,0,0,0,3142,3145,1,0,0,0,3143,3141,1,0,0,0,3144,3127,1,0,0,
	0,3144,3145,1,0,0,0,3145,3146,1,0,0,0,3146,3147,5,21,0,0,3147,419,1,0,0,
	0,3148,3149,3,474,237,0,3149,3150,3,422,211,0,3150,421,1,0,0,0,3151,3152,
	7,17,0,0,3152,423,1,0,0,0,3153,3154,3,482,241,0,3154,425,1,0,0,0,3155,3157,
	5,17,0,0,3156,3158,5,218,0,0,3157,3156,1,0,0,0,3157,3158,1,0,0,0,3158,3159,
	1,0,0,0,3159,3168,3,414,207,0,3160,3162,5,218,0,0,3161,3160,1,0,0,0,3161,
	3162,1,0,0,0,3162,3163,1,0,0,0,3163,3165,5,23,0,0,3164,3166,5,218,0,0,3165,
	3164,1,0,0,0,3165,3166,1,0,0,0,3166,3167,1,0,0,0,3167,3169,3,336,168,0,
	3168,3161,1,0,0,0,3168,3169,1,0,0,0,3169,3171,1,0,0,0,3170,3172,5,218,0,
	0,3171,3170,1,0,0,0,3171,3172,1,0,0,0,3172,3173,1,0,0,0,3173,3174,5,18,
	0,0,3174,427,1,0,0,0,3175,3177,5,17,0,0,3176,3178,5,218,0,0,3177,3176,1,
	0,0,0,3177,3178,1,0,0,0,3178,3187,1,0,0,0,3179,3181,3,436,218,0,3180,3182,
	5,218,0,0,3181,3180,1,0,0,0,3181,3182,1,0,0,0,3182,3183,1,0,0,0,3183,3185,
	5,12,0,0,3184,3186,5,218,0,0,3185,3184,1,0,0,0,3185,3186,1,0,0,0,3186,3188,
	1,0,0,0,3187,3179,1,0,0,0,3187,3188,1,0,0,0,3188,3189,1,0,0,0,3189,3191,
	3,412,206,0,3190,3192,5,218,0,0,3191,3190,1,0,0,0,3191,3192,1,0,0,0,3192,
	3201,1,0,0,0,3193,3195,5,104,0,0,3194,3196,5,218,0,0,3195,3194,1,0,0,0,
	3195,3196,1,0,0,0,3196,3197,1,0,0,0,3197,3199,3,336,168,0,3198,3200,5,218,
	0,0,3199,3198,1,0,0,0,3199,3200,1,0,0,0,3200,3202,1,0,0,0,3201,3193,1,0,
	0,0,3201,3202,1,0,0,0,3202,3203,1,0,0,0,3203,3205,5,23,0,0,3204,3206,5,
	218,0,0,3205,3204,1,0,0,0,3205,3206,1,0,0,0,3206,3207,1,0,0,0,3207,3209,
	3,336,168,0,3208,3210,5,218,0,0,3209,3208,1,0,0,0,3209,3210,1,0,0,0,3210,
	3211,1,0,0,0,3211,3212,5,18,0,0,3212,429,1,0,0,0,3213,3215,5,7,0,0,3214,
	3216,5,218,0,0,3215,3214,1,0,0,0,3215,3216,1,0,0,0,3216,3217,1,0,0,0,3217,
	3218,3,468,234,0,3218,431,1,0,0,0,3219,3224,5,124,0,0,3220,3222,5,218,0,
	0,3221,3220,1,0,0,0,3221,3222,1,0,0,0,3222,3223,1,0,0,0,3223,3225,3,434,
	217,0,3224,3221,1,0,0,0,3225,3226,1,0,0,0,3226,3224,1,0,0,0,3226,3227,1,
	0,0,0,3227,3242,1,0,0,0,3228,3230,5,124,0,0,3229,3231,5,218,0,0,3230,3229,
	1,0,0,0,3230,3231,1,0,0,0,3231,3232,1,0,0,0,3232,3237,3,336,168,0,3233,
	3235,5,218,0,0,3234,3233,1,0,0,0,3234,3235,1,0,0,0,3235,3236,1,0,0,0,3236,
	3238,3,434,217,0,3237,3234,1,0,0,0,3238,3239,1,0,0,0,3239,3237,1,0,0,0,
	3239,3240,1,0,0,0,3240,3242,1,0,0,0,3241,3219,1,0,0,0,3241,3228,1,0,0,0,
	3242,3251,1,0,0,0,3243,3245,5,218,0,0,3244,3243,1,0,0,0,3244,3245,1,0,0,
	0,3245,3246,1,0,0,0,3246,3248,5,125,0,0,3247,3249,5,218,0,0,3248,3247,1,
	0,0,0,3248,3249,1,0,0,0,3249,3250,1,0,0,0,3250,3252,3,336,168,0,3251,3244,
	1,0,0,0,3251,3252,1,0,0,0,3252,3254,1,0,0,0,3253,3255,5,218,0,0,3254,3253,
	1,0,0,0,3254,3255,1,0,0,0,3255,3256,1,0,0,0,3256,3257,5,126,0,0,3257,433,
	1,0,0,0,3258,3260,5,127,0,0,3259,3261,5,218,0,0,3260,3259,1,0,0,0,3260,
	3261,1,0,0,0,3261,3262,1,0,0,0,3262,3264,3,336,168,0,3263,3265,5,218,0,
	0,3264,3263,1,0,0,0,3264,3265,1,0,0,0,3265,3266,1,0,0,0,3266,3268,5,128,
	0,0,3267,3269,5,218,0,0,3268,3267,1,0,0,0,3268,3269,1,0,0,0,3269,3270,1,
	0,0,0,3270,3271,3,336,168,0,3271,435,1,0,0,0,3272,3273,3,482,241,0,3273,
	437,1,0,0,0,3274,3277,3,472,236,0,3275,3277,3,470,235,0,3276,3274,1,0,0,
	0,3276,3275,1,0,0,0,3277,439,1,0,0,0,3278,3280,5,14,0,0,3279,3281,5,218,
	0,0,3280,3279,1,0,0,0,3280,3281,1,0,0,0,3281,3299,1,0,0,0,3282,3284,3,446,
	223,0,3283,3285,5,218,0,0,3284,3283,1,0,0,0,3284,3285,1,0,0,0,3285,3296,
	1,0,0,0,3286,3288,5,15,0,0,3287,3289,5,218,0,0,3288,3287,1,0,0,0,3288,3289,
	1,0,0,0,3289,3290,1,0,0,0,3290,3292,3,446,223,0,3291,3293,5,218,0,0,3292,
	3291,1,0,0,0,3292,3293,1,0,0,0,3293,3295,1,0,0,0,3294,3286,1,0,0,0,3295,
	3298,1,0,0,0,3296,3294,1,0,0,0,3296,3297,1,0,0,0,3297,3300,1,0,0,0,3298,
	3296,1,0,0,0,3299,3282,1,0,0,0,3299,3300,1,0,0,0,3300,3301,1,0,0,0,3301,
	3302,5,16,0,0,3302,441,1,0,0,0,3303,3305,3,436,218,0,3304,3306,5,218,0,
	0,3305,3304,1,0,0,0,3305,3306,1,0,0,0,3306,3307,1,0,0,0,3307,3309,5,14,
	0,0,3308,3310,5,218,0,0,3309,3308,1,0,0,0,3309,3310,1,0,0,0,3310,3312,1,
	0,0,0,3311,3313,3,444,222,0,3312,3311,1,0,0,0,3312,3313,1,0,0,0,3313,3324,
	1,0,0,0,3314,3316,5,218,0,0,3315,3314,1,0,0,0,3315,3316,1,0,0,0,3316,3317,
	1,0,0,0,3317,3319,5,15,0,0,3318,3320,5,218,0,0,3319,3318,1,0,0,0,3319,3320,
	1,0,0,0,3320,3321,1,0,0,0,3321,3323,3,444,222,0,3322,3315,1,0,0,0,3323,
	3326,1,0,0,0,3324,3322,1,0,0,0,3324,3325,1,0,0,0,3325,3328,1,0,0,0,3326,
	3324,1,0,0,0,3327,3329,5,218,0,0,3328,3327,1,0,0,0,3328,3329,1,0,0,0,3329,
	3330,1,0,0,0,3330,3331,5,16,0,0,3331,443,1,0,0,0,3332,3337,3,446,223,0,
	3333,3337,3,448,224,0,3334,3337,3,450,225,0,3335,3337,3,452,226,0,3336,
	3332,1,0,0,0,3336,3333,1,0,0,0,3336,3334,1,0,0,0,3336,3335,1,0,0,0,3337,
	445,1,0,0,0,3338,3340,3,468,234,0,3339,3341,5,218,0,0,3340,3339,1,0,0,0,
	3340,3341,1,0,0,0,3341,3342,1,0,0,0,3342,3344,5,2,0,0,3343,3345,5,218,0,
	0,3344,3343,1,0,0,0,3344,3345,1,0,0,0,3345,3346,1,0,0,0,3346,3347,3,336,
	168,0,3347,447,1,0,0,0,3348,3349,5,7,0,0,3349,3350,3,436,218,0,3350,449,
	1,0,0,0,3351,3352,3,436,218,0,3352,451,1,0,0,0,3353,3354,5,7,0,0,3354,3355,
	5,19,0,0,3355,453,1,0,0,0,3356,3359,3,456,228,0,3357,3359,3,458,229,0,3358,
	3356,1,0,0,0,3358,3357,1,0,0,0,3359,455,1,0,0,0,3360,3362,5,14,0,0,3361,
	3363,5,218,0,0,3362,3361,1,0,0,0,3362,3363,1,0,0,0,3363,3364,1,0,0,0,3364,
	3366,3,460,230,0,3365,3367,5,218,0,0,3366,3365,1,0,0,0,3366,3367,1,0,0,
	0,3367,3368,1,0,0,0,3368,3369,5,16,0,0,3369,457,1,0,0,0,3370,3371,5,34,
	0,0,3371,3372,3,460,230,0,3372,459,1,0,0,0,3373,3376,3,482,241,0,3374,3376,
	5,203,0,0,3375,3373,1,0,0,0,3375,3374,1,0,0,0,3376,461,1,0,0,0,3377,3388,
	3,464,232,0,3378,3380,5,218,0,0,3379,3378,1,0,0,0,3379,3380,1,0,0,0,3380,
	3381,1,0,0,0,3381,3383,5,15,0,0,3382,3384,5,218,0,0,3383,3382,1,0,0,0,3383,
	3384,1,0,0,0,3384,3385,1,0,0,0,3385,3387,3,464,232,0,3386,3379,1,0,0,0,
	3387,3390,1,0,0,0,3388,3386,1,0,0,0,3388,3389,1,0,0,0,3389,463,1,0,0,0,
	3390,3388,1,0,0,0,3391,3396,3,398,199,0,3392,3394,5,218,0,0,3393,3392,1,
	0,0,0,3393,3394,1,0,0,0,3394,3395,1,0,0,0,3395,3397,3,430,215,0,3396,3393,
	1,0,0,0,3397,3398,1,0,0,0,3398,3396,1,0,0,0,3398,3399,1,0,0,0,3399,465,
	1,0,0,0,3400,3411,3,468,234,0,3401,3403,5,218,0,0,3402,3401,1,0,0,0,3402,
	3403,1,0,0,0,3403,3404,1,0,0,0,3404,3406,5,15,0,0,3405,3407,5,218,0,0,3406,
	3405,1,0,0,0,3406,3407,1,0,0,0,3407,3408,1,0,0,0,3408,3410,3,468,234,0,
	3409,3402,1,0,0,0,3410,3413,1,0,0,0,3411,3409,1,0,0,0,3411,3412,1,0,0,0,
	3412,467,1,0,0,0,3413,3411,1,0,0,0,3414,3415,3,482,241,0,3415,469,1,0,0,
	0,3416,3417,7,18,0,0,3417,471,1,0,0,0,3418,3419,7,19,0,0,3419,473,1,0,0,
	0,3420,3421,3,482,241,0,3421,3422,5,7,0,0,3422,3424,1,0,0,0,3423,3420,1,
	0,0,0,3424,3427,1,0,0,0,3425,3423,1,0,0,0,3425,3426,1,0,0,0,3426,475,1,
	0,0,0,3427,3425,1,0,0,0,3428,3429,7,20,0,0,3429,477,1,0,0,0,3430,3431,7,
	21,0,0,3431,479,1,0,0,0,3432,3433,7,22,0,0,3433,481,1,0,0,0,3434,3439,3,
	484,242,0,3435,3439,5,214,0,0,3436,3439,5,217,0,0,3437,3439,5,205,0,0,3438,
	3434,1,0,0,0,3438,3435,1,0,0,0,3438,3436,1,0,0,0,3438,3437,1,0,0,0,3439,
	483,1,0,0,0,3440,3441,7,23,0,0,3441,485,1,0,0,0,498,491,495,500,504,507,
	512,520,528,541,545,549,558,563,567,570,573,578,582,589,607,630,638,640,
	644,649,655,661,665,669,673,677,684,687,691,695,701,705,709,713,717,724,
	727,735,744,749,753,756,763,771,775,781,786,792,803,807,815,818,822,826,
	831,836,842,847,857,861,866,873,878,881,897,909,914,921,930,936,942,949,
	955,962,964,973,977,984,991,993,1012,1026,1031,1038,1047,1049,1058,1074,
	1080,1091,1101,1107,1117,1127,1130,1177,1224,1239,1247,1267,1276,1280,1285,
	1288,1297,1301,1306,1309,1313,1317,1322,1330,1335,1342,1348,1377,1386,1395,
	1401,1407,1410,1412,1432,1439,1446,1453,1455,1460,1464,1469,1472,1476,1480,
	1488,1494,1503,1510,1515,1524,1558,1562,1569,1575,1631,1635,1639,1643,1651,
	1655,1660,1664,1678,1682,1687,1691,1697,1701,1715,1722,1728,1738,1742,1748,
	1756,1767,1773,1785,1791,1803,1807,1817,1830,1834,1838,1844,1848,1851,1855,
	1865,1872,1885,1889,1897,1903,1907,1911,1916,1921,1925,1931,1935,1941,1945,
	1951,1955,1959,1963,1967,1971,1976,1983,1987,1992,1999,2003,2007,2015,2022,
	2025,2031,2034,2039,2042,2046,2049,2052,2059,2063,2067,2071,2074,2078,2082,
	2087,2092,2096,2101,2105,2114,2120,2123,2127,2130,2137,2140,2143,2147,2152,
	2156,2164,2168,2173,2178,2182,2200,2204,2209,2222,2226,2228,2231,2240,2244,
	2248,2260,2264,2269,2279,2285,2289,2294,2298,2302,2306,2312,2316,2321,2327,
	2336,2345,2353,2359,2363,2368,2377,2381,2386,2391,2395,2400,2404,2408,2413,
	2420,2424,2428,2430,2434,2436,2440,2442,2448,2454,2457,2460,2466,2471,2475,
	2480,2484,2488,2490,2494,2496,2499,2503,2505,2511,2515,2521,2527,2534,2540,
	2545,2553,2557,2559,2563,2567,2569,2571,2586,2596,2606,2611,2615,2622,2627,
	2632,2636,2640,2644,2647,2649,2654,2658,2662,2666,2670,2674,2677,2679,2684,
	2688,2693,2698,2702,2709,2716,2720,2724,2728,2743,2746,2759,2761,2766,2770,
	2774,2779,2783,2787,2795,2799,2803,2811,2815,2819,2827,2831,2835,2843,2847,
	2851,2859,2863,2867,2875,2879,2883,2887,2890,2893,2901,2905,2909,2913,2917,
	2921,2925,2929,2933,2941,2945,2949,2955,2959,2963,2967,2978,2982,2986,3004,
	3013,3021,3025,3029,3033,3037,3040,3046,3051,3056,3061,3066,3071,3076,3079,
	3083,3087,3093,3098,3102,3105,3115,3119,3123,3125,3129,3133,3137,3141,3144,
	3157,3161,3165,3168,3171,3177,3181,3185,3187,3191,3195,3199,3201,3205,3209,
	3215,3221,3226,3230,3234,3239,3241,3244,3248,3251,3254,3260,3264,3268,3276,
	3280,3284,3288,3292,3296,3299,3305,3309,3312,3315,3319,3324,3328,3336,3340,
	3344,3358,3362,3366,3375,3379,3383,3388,3393,3398,3402,3406,3411,3425,3438];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CypherParser.__ATN) {
			CypherParser.__ATN = new ATNDeserializer().deserialize(CypherParser._serializedATN);
		}

		return CypherParser.__ATN;
	}


	static DecisionsToDFA = CypherParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CypherContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherPart_list(): CypherPartContext[] {
		return this.getTypedRuleContexts(CypherPartContext) as CypherPartContext[];
	}
	public cypherPart(i: number): CypherPartContext {
		return this.getTypedRuleContext(CypherPartContext, i) as CypherPartContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(CypherParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypher;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypher) {
	 		listener.enterCypher(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypher) {
	 		listener.exitCypher(this);
		}
	}
}


export class CypherPartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherQuery(): CypherQueryContext {
		return this.getTypedRuleContext(CypherQueryContext, 0) as CypherQueryContext;
	}
	public cypherConsoleCommand(): CypherConsoleCommandContext {
		return this.getTypedRuleContext(CypherConsoleCommandContext, 0) as CypherConsoleCommandContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherPart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherPart) {
	 		listener.enterCypherPart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherPart) {
	 		listener.exitCypherPart(this);
		}
	}
}


export class CypherConsoleCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherConsoleCommandName(): CypherConsoleCommandNameContext {
		return this.getTypedRuleContext(CypherConsoleCommandNameContext, 0) as CypherConsoleCommandNameContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public cypherConsoleCommandParameters(): CypherConsoleCommandParametersContext {
		return this.getTypedRuleContext(CypherConsoleCommandParametersContext, 0) as CypherConsoleCommandParametersContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherConsoleCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherConsoleCommand) {
	 		listener.enterCypherConsoleCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherConsoleCommand) {
	 		listener.exitCypherConsoleCommand(this);
		}
	}
}


export class CypherConsoleCommandNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherConsoleCommandName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherConsoleCommandName) {
	 		listener.enterCypherConsoleCommandName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherConsoleCommandName) {
	 		listener.exitCypherConsoleCommandName(this);
		}
	}
}


export class CypherConsoleCommandParametersContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherConsoleCommandParameter_list(): CypherConsoleCommandParameterContext[] {
		return this.getTypedRuleContexts(CypherConsoleCommandParameterContext) as CypherConsoleCommandParameterContext[];
	}
	public cypherConsoleCommandParameter(i: number): CypherConsoleCommandParameterContext {
		return this.getTypedRuleContext(CypherConsoleCommandParameterContext, i) as CypherConsoleCommandParameterContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherConsoleCommandParameters;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherConsoleCommandParameters) {
	 		listener.enterCypherConsoleCommandParameters(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherConsoleCommandParameters) {
	 		listener.exitCypherConsoleCommandParameters(this);
		}
	}
}


export class CypherConsoleCommandParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public url(): UrlContext {
		return this.getTypedRuleContext(UrlContext, 0) as UrlContext;
	}
	public json(): JsonContext {
		return this.getTypedRuleContext(JsonContext, 0) as JsonContext;
	}
	public arrowExpression(): ArrowExpressionContext {
		return this.getTypedRuleContext(ArrowExpressionContext, 0) as ArrowExpressionContext;
	}
	public mapLiteral(): MapLiteralContext {
		return this.getTypedRuleContext(MapLiteralContext, 0) as MapLiteralContext;
	}
	public keyValueLiteral(): KeyValueLiteralContext {
		return this.getTypedRuleContext(KeyValueLiteralContext, 0) as KeyValueLiteralContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public subCommand(): SubCommandContext {
		return this.getTypedRuleContext(SubCommandContext, 0) as SubCommandContext;
	}
	public commandPath(): CommandPathContext {
		return this.getTypedRuleContext(CommandPathContext, 0) as CommandPathContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherConsoleCommandParameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherConsoleCommandParameter) {
	 		listener.enterCypherConsoleCommandParameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherConsoleCommandParameter) {
	 		listener.exitCypherConsoleCommandParameter(this);
		}
	}
}


export class ArrowExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_arrowExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterArrowExpression) {
	 		listener.enterArrowExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitArrowExpression) {
	 		listener.exitArrowExpression(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uri(): UriContext {
		return this.getTypedRuleContext(UriContext, 0) as UriContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_url;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUrl) {
	 		listener.enterUrl(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUrl) {
	 		listener.exitUrl(this);
		}
	}
}


export class UriContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scheme(): SchemeContext {
		return this.getTypedRuleContext(SchemeContext, 0) as SchemeContext;
	}
	public host(): HostContext {
		return this.getTypedRuleContext(HostContext, 0) as HostContext;
	}
	public login(): LoginContext {
		return this.getTypedRuleContext(LoginContext, 0) as LoginContext;
	}
	public port(): PortContext {
		return this.getTypedRuleContext(PortContext, 0) as PortContext;
	}
	public path(): PathContext {
		return this.getTypedRuleContext(PathContext, 0) as PathContext;
	}
	public urlQuery(): UrlQueryContext {
		return this.getTypedRuleContext(UrlQueryContext, 0) as UrlQueryContext;
	}
	public frag(): FragContext {
		return this.getTypedRuleContext(FragContext, 0) as FragContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_uri;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUri) {
	 		listener.enterUri(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUri) {
	 		listener.exitUri(this);
		}
	}
}


export class SchemeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_scheme;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterScheme) {
	 		listener.enterScheme(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitScheme) {
	 		listener.exitScheme(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public hostname(): HostnameContext {
		return this.getTypedRuleContext(HostnameContext, 0) as HostnameContext;
	}
	public hostnumber(): HostnumberContext {
		return this.getTypedRuleContext(HostnumberContext, 0) as HostnumberContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_host;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterHost) {
	 		listener.enterHost(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitHost) {
	 		listener.exitHost(this);
		}
	}
}


export class HostnameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_hostname;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterHostname) {
	 		listener.enterHostname(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitHostname) {
	 		listener.exitHostname(this);
		}
	}
}


export class HostnumberContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public urlDigits_list(): UrlDigitsContext[] {
		return this.getTypedRuleContexts(UrlDigitsContext) as UrlDigitsContext[];
	}
	public urlDigits(i: number): UrlDigitsContext {
		return this.getTypedRuleContext(UrlDigitsContext, i) as UrlDigitsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_hostnumber;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterHostnumber) {
	 		listener.enterHostnumber(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitHostnumber) {
	 		listener.exitHostnumber(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public urlDigits(): UrlDigitsContext {
		return this.getTypedRuleContext(UrlDigitsContext, 0) as UrlDigitsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_port;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPort) {
	 		listener.enterPort(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPort) {
	 		listener.exitPort(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_path;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPath) {
	 		listener.enterPath(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPath) {
	 		listener.exitPath(this);
		}
	}
}


export class UserContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_user;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUser) {
	 		listener.enterUser(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUser) {
	 		listener.exitUser(this);
		}
	}
}


export class LoginContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public password(): PasswordContext {
		return this.getTypedRuleContext(PasswordContext, 0) as PasswordContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_login;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLogin) {
	 		listener.enterLogin(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLogin) {
	 		listener.exitLogin(this);
		}
	}
}


export class PasswordContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_password;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPassword) {
	 		listener.enterPassword(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPassword) {
	 		listener.exitPassword(this);
		}
	}
}


export class FragContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_frag;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFrag) {
	 		listener.enterFrag(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFrag) {
	 		listener.exitFrag(this);
		}
	}
}


export class UrlQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public search(): SearchContext {
		return this.getTypedRuleContext(SearchContext, 0) as SearchContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_urlQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUrlQuery) {
	 		listener.enterUrlQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUrlQuery) {
	 		listener.exitUrlQuery(this);
		}
	}
}


export class SearchContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public searchparameter_list(): SearchparameterContext[] {
		return this.getTypedRuleContexts(SearchparameterContext) as SearchparameterContext[];
	}
	public searchparameter(i: number): SearchparameterContext {
		return this.getTypedRuleContext(SearchparameterContext, i) as SearchparameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_search;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSearch) {
	 		listener.enterSearch(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSearch) {
	 		listener.exitSearch(this);
		}
	}
}


export class SearchparameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string__list(): StringContext[] {
		return this.getTypedRuleContexts(StringContext) as StringContext[];
	}
	public string_(i: number): StringContext {
		return this.getTypedRuleContext(StringContext, i) as StringContext;
	}
	public urlDigits(): UrlDigitsContext {
		return this.getTypedRuleContext(UrlDigitsContext, 0) as UrlDigitsContext;
	}
	public UrlHex(): TerminalNode {
		return this.getToken(CypherParser.UrlHex, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_searchparameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSearchparameter) {
	 		listener.enterSearchparameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSearchparameter) {
	 		listener.exitSearchparameter(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_string;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
}


export class UrlDigitsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerLiteral_list(): IntegerLiteralContext[] {
		return this.getTypedRuleContexts(IntegerLiteralContext) as IntegerLiteralContext[];
	}
	public integerLiteral(i: number): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, i) as IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_urlDigits;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUrlDigits) {
	 		listener.enterUrlDigits(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUrlDigits) {
	 		listener.exitUrlDigits(this);
		}
	}
}


export class JsonContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_json;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterJson) {
	 		listener.enterJson(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitJson) {
	 		listener.exitJson(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pair_list(): PairContext[] {
		return this.getTypedRuleContexts(PairContext) as PairContext[];
	}
	public pair(i: number): PairContext {
		return this.getTypedRuleContext(PairContext, i) as PairContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_obj;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterObj) {
	 		listener.enterObj(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitObj) {
	 		listener.exitObj(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_pair;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPair) {
	 		listener.enterPair(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPair) {
	 		listener.exitPair(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_array;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterArray) {
	 		listener.enterArray(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitArray) {
	 		listener.exitArray(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public obj(): ObjContext {
		return this.getTypedRuleContext(ObjContext, 0) as ObjContext;
	}
	public array(): ArrayContext {
		return this.getTypedRuleContext(ArrayContext, 0) as ArrayContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_value;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class KeyValueLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_keyValueLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterKeyValueLiteral) {
	 		listener.enterKeyValueLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitKeyValueLiteral) {
	 		listener.exitKeyValueLiteral(this);
		}
	}
}


export class CommandPathContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public numberLiteral_list(): NumberLiteralContext[] {
		return this.getTypedRuleContexts(NumberLiteralContext) as NumberLiteralContext[];
	}
	public numberLiteral(i: number): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, i) as NumberLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_commandPath;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCommandPath) {
	 		listener.enterCommandPath(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCommandPath) {
	 		listener.exitCommandPath(this);
		}
	}
}


export class SubCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_subCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSubCommand) {
	 		listener.enterSubCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSubCommand) {
	 		listener.exitSubCommand(this);
		}
	}
}


export class CypherQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public queryOptions(): QueryOptionsContext {
		return this.getTypedRuleContext(QueryOptionsContext, 0) as QueryOptionsContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherQuery) {
	 		listener.enterCypherQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherQuery) {
	 		listener.exitCypherQuery(this);
		}
	}
}


export class QueryOptionsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public anyCypherOption_list(): AnyCypherOptionContext[] {
		return this.getTypedRuleContexts(AnyCypherOptionContext) as AnyCypherOptionContext[];
	}
	public anyCypherOption(i: number): AnyCypherOptionContext {
		return this.getTypedRuleContext(AnyCypherOptionContext, i) as AnyCypherOptionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_queryOptions;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterQueryOptions) {
	 		listener.enterQueryOptions(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitQueryOptions) {
	 		listener.exitQueryOptions(this);
		}
	}
}


export class AnyCypherOptionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cypherOption(): CypherOptionContext {
		return this.getTypedRuleContext(CypherOptionContext, 0) as CypherOptionContext;
	}
	public explain(): ExplainContext {
		return this.getTypedRuleContext(ExplainContext, 0) as ExplainContext;
	}
	public profile(): ProfileContext {
		return this.getTypedRuleContext(ProfileContext, 0) as ProfileContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_anyCypherOption;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAnyCypherOption) {
	 		listener.enterAnyCypherOption(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAnyCypherOption) {
	 		listener.exitAnyCypherOption(this);
		}
	}
}


export class CypherOptionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CYPHER(): TerminalNode {
		return this.getToken(CypherParser.CYPHER, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public versionNumber(): VersionNumberContext {
		return this.getTypedRuleContext(VersionNumberContext, 0) as VersionNumberContext;
	}
	public configurationOption_list(): ConfigurationOptionContext[] {
		return this.getTypedRuleContexts(ConfigurationOptionContext) as ConfigurationOptionContext[];
	}
	public configurationOption(i: number): ConfigurationOptionContext {
		return this.getTypedRuleContext(ConfigurationOptionContext, i) as ConfigurationOptionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_cypherOption;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCypherOption) {
	 		listener.enterCypherOption(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCypherOption) {
	 		listener.exitCypherOption(this);
		}
	}
}


export class VersionNumberContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RegularDecimalReal(): TerminalNode {
		return this.getToken(CypherParser.RegularDecimalReal, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_versionNumber;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterVersionNumber) {
	 		listener.enterVersionNumber(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitVersionNumber) {
	 		listener.exitVersionNumber(this);
		}
	}
}


export class ExplainContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(CypherParser.EXPLAIN, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_explain;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExplain) {
	 		listener.enterExplain(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExplain) {
	 		listener.exitExplain(this);
		}
	}
}


export class ProfileContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROFILE(): TerminalNode {
		return this.getToken(CypherParser.PROFILE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_profile;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProfile) {
	 		listener.enterProfile(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProfile) {
	 		listener.exitProfile(this);
		}
	}
}


export class ConfigurationOptionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_configurationOption;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterConfigurationOption) {
	 		listener.enterConfigurationOption(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitConfigurationOption) {
	 		listener.exitConfigurationOption(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public command(): CommandContext {
		return this.getTypedRuleContext(CommandContext, 0) as CommandContext;
	}
	public query(): QueryContext {
		return this.getTypedRuleContext(QueryContext, 0) as QueryContext;
	}
	public systemCommand(): SystemCommandContext {
		return this.getTypedRuleContext(SystemCommandContext, 0) as SystemCommandContext;
	}
	public CATALOG(): TerminalNode {
		return this.getToken(CypherParser.CATALOG, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_statement;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public regularQuery(): RegularQueryContext {
		return this.getTypedRuleContext(RegularQueryContext, 0) as RegularQueryContext;
	}
	public bulkImportQuery(): BulkImportQueryContext {
		return this.getTypedRuleContext(BulkImportQueryContext, 0) as BulkImportQueryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_query;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterQuery) {
	 		listener.enterQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitQuery) {
	 		listener.exitQuery(this);
		}
	}
}


export class RegularQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleQuery(): SingleQueryContext {
		return this.getTypedRuleContext(SingleQueryContext, 0) as SingleQueryContext;
	}
	public union_list(): UnionContext[] {
		return this.getTypedRuleContexts(UnionContext) as UnionContext[];
	}
	public union(i: number): UnionContext {
		return this.getTypedRuleContext(UnionContext, i) as UnionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_regularQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRegularQuery) {
	 		listener.enterRegularQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRegularQuery) {
	 		listener.exitRegularQuery(this);
		}
	}
}


export class BulkImportQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public periodicCommitHint(): PeriodicCommitHintContext {
		return this.getTypedRuleContext(PeriodicCommitHintContext, 0) as PeriodicCommitHintContext;
	}
	public loadCSVQuery(): LoadCSVQueryContext {
		return this.getTypedRuleContext(LoadCSVQueryContext, 0) as LoadCSVQueryContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_bulkImportQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterBulkImportQuery) {
	 		listener.enterBulkImportQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitBulkImportQuery) {
	 		listener.exitBulkImportQuery(this);
		}
	}
}


export class SingleQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clause_list(): ClauseContext[] {
		return this.getTypedRuleContexts(ClauseContext) as ClauseContext[];
	}
	public clause(i: number): ClauseContext {
		return this.getTypedRuleContext(ClauseContext, i) as ClauseContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_singleQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSingleQuery) {
	 		listener.enterSingleQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSingleQuery) {
	 		listener.exitSingleQuery(this);
		}
	}
}


export class PeriodicCommitHintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USING(): TerminalNode {
		return this.getToken(CypherParser.USING, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public PERIODIC(): TerminalNode {
		return this.getToken(CypherParser.PERIODIC, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(CypherParser.COMMIT, 0);
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_periodicCommitHint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPeriodicCommitHint) {
	 		listener.enterPeriodicCommitHint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPeriodicCommitHint) {
	 		listener.exitPeriodicCommitHint(this);
		}
	}
}


export class LoadCSVQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public loadCSVClause(): LoadCSVClauseContext {
		return this.getTypedRuleContext(LoadCSVClauseContext, 0) as LoadCSVClauseContext;
	}
	public clause_list(): ClauseContext[] {
		return this.getTypedRuleContexts(ClauseContext) as ClauseContext[];
	}
	public clause(i: number): ClauseContext {
		return this.getTypedRuleContext(ClauseContext, i) as ClauseContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_loadCSVQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLoadCSVQuery) {
	 		listener.enterLoadCSVQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLoadCSVQuery) {
	 		listener.exitLoadCSVQuery(this);
		}
	}
}


export class UnionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNION(): TerminalNode {
		return this.getToken(CypherParser.UNION, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public singleQuery(): SingleQueryContext {
		return this.getTypedRuleContext(SingleQueryContext, 0) as SingleQueryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_union;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUnion) {
	 		listener.enterUnion(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUnion) {
	 		listener.exitUnion(this);
		}
	}
}


export class ClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public loadCSVClause(): LoadCSVClauseContext {
		return this.getTypedRuleContext(LoadCSVClauseContext, 0) as LoadCSVClauseContext;
	}
	public startClause(): StartClauseContext {
		return this.getTypedRuleContext(StartClauseContext, 0) as StartClauseContext;
	}
	public matchClause(): MatchClauseContext {
		return this.getTypedRuleContext(MatchClauseContext, 0) as MatchClauseContext;
	}
	public unwindClause(): UnwindClauseContext {
		return this.getTypedRuleContext(UnwindClauseContext, 0) as UnwindClauseContext;
	}
	public mergeClause(): MergeClauseContext {
		return this.getTypedRuleContext(MergeClauseContext, 0) as MergeClauseContext;
	}
	public createClause(): CreateClauseContext {
		return this.getTypedRuleContext(CreateClauseContext, 0) as CreateClauseContext;
	}
	public createUniqueClause(): CreateUniqueClauseContext {
		return this.getTypedRuleContext(CreateUniqueClauseContext, 0) as CreateUniqueClauseContext;
	}
	public setClause(): SetClauseContext {
		return this.getTypedRuleContext(SetClauseContext, 0) as SetClauseContext;
	}
	public deleteClause(): DeleteClauseContext {
		return this.getTypedRuleContext(DeleteClauseContext, 0) as DeleteClauseContext;
	}
	public removeClause(): RemoveClauseContext {
		return this.getTypedRuleContext(RemoveClauseContext, 0) as RemoveClauseContext;
	}
	public foreachClause(): ForeachClauseContext {
		return this.getTypedRuleContext(ForeachClauseContext, 0) as ForeachClauseContext;
	}
	public withClause(): WithClauseContext {
		return this.getTypedRuleContext(WithClauseContext, 0) as WithClauseContext;
	}
	public returnClause(): ReturnClauseContext {
		return this.getTypedRuleContext(ReturnClauseContext, 0) as ReturnClauseContext;
	}
	public call(): CallContext {
		return this.getTypedRuleContext(CallContext, 0) as CallContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_clause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterClause) {
	 		listener.enterClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitClause) {
	 		listener.exitClause(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public createIndex(): CreateIndexContext {
		return this.getTypedRuleContext(CreateIndexContext, 0) as CreateIndexContext;
	}
	public dropIndex(): DropIndexContext {
		return this.getTypedRuleContext(DropIndexContext, 0) as DropIndexContext;
	}
	public createUniqueConstraint(): CreateUniqueConstraintContext {
		return this.getTypedRuleContext(CreateUniqueConstraintContext, 0) as CreateUniqueConstraintContext;
	}
	public dropUniqueConstraint(): DropUniqueConstraintContext {
		return this.getTypedRuleContext(DropUniqueConstraintContext, 0) as DropUniqueConstraintContext;
	}
	public createNodeKeyConstraint(): CreateNodeKeyConstraintContext {
		return this.getTypedRuleContext(CreateNodeKeyConstraintContext, 0) as CreateNodeKeyConstraintContext;
	}
	public dropNodeKeyConstraint(): DropNodeKeyConstraintContext {
		return this.getTypedRuleContext(DropNodeKeyConstraintContext, 0) as DropNodeKeyConstraintContext;
	}
	public createNodePropertyExistenceConstraint(): CreateNodePropertyExistenceConstraintContext {
		return this.getTypedRuleContext(CreateNodePropertyExistenceConstraintContext, 0) as CreateNodePropertyExistenceConstraintContext;
	}
	public dropNodePropertyExistenceConstraint(): DropNodePropertyExistenceConstraintContext {
		return this.getTypedRuleContext(DropNodePropertyExistenceConstraintContext, 0) as DropNodePropertyExistenceConstraintContext;
	}
	public createRelationshipPropertyExistenceConstraint(): CreateRelationshipPropertyExistenceConstraintContext {
		return this.getTypedRuleContext(CreateRelationshipPropertyExistenceConstraintContext, 0) as CreateRelationshipPropertyExistenceConstraintContext;
	}
	public dropRelationshipPropertyExistenceConstraint(): DropRelationshipPropertyExistenceConstraintContext {
		return this.getTypedRuleContext(DropRelationshipPropertyExistenceConstraintContext, 0) as DropRelationshipPropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_command;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCommand) {
	 		listener.enterCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCommand) {
	 		listener.exitCommand(this);
		}
	}
}


export class SystemCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multidatabaseCommand(): MultidatabaseCommandContext {
		return this.getTypedRuleContext(MultidatabaseCommandContext, 0) as MultidatabaseCommandContext;
	}
	public userCommand(): UserCommandContext {
		return this.getTypedRuleContext(UserCommandContext, 0) as UserCommandContext;
	}
	public privilegeCommand(): PrivilegeCommandContext {
		return this.getTypedRuleContext(PrivilegeCommandContext, 0) as PrivilegeCommandContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_systemCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSystemCommand) {
	 		listener.enterSystemCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSystemCommand) {
	 		listener.exitSystemCommand(this);
		}
	}
}


export class MultidatabaseCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public showDatabase(): ShowDatabaseContext {
		return this.getTypedRuleContext(ShowDatabaseContext, 0) as ShowDatabaseContext;
	}
	public createDatabase(): CreateDatabaseContext {
		return this.getTypedRuleContext(CreateDatabaseContext, 0) as CreateDatabaseContext;
	}
	public dropDatabase(): DropDatabaseContext {
		return this.getTypedRuleContext(DropDatabaseContext, 0) as DropDatabaseContext;
	}
	public startDatabase(): StartDatabaseContext {
		return this.getTypedRuleContext(StartDatabaseContext, 0) as StartDatabaseContext;
	}
	public stopDatabase(): StopDatabaseContext {
		return this.getTypedRuleContext(StopDatabaseContext, 0) as StopDatabaseContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_multidatabaseCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMultidatabaseCommand) {
	 		listener.enterMultidatabaseCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMultidatabaseCommand) {
	 		listener.exitMultidatabaseCommand(this);
		}
	}
}


export class UserCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public showRoles(): ShowRolesContext {
		return this.getTypedRuleContext(ShowRolesContext, 0) as ShowRolesContext;
	}
	public createRole(): CreateRoleContext {
		return this.getTypedRuleContext(CreateRoleContext, 0) as CreateRoleContext;
	}
	public dropRole(): DropRoleContext {
		return this.getTypedRuleContext(DropRoleContext, 0) as DropRoleContext;
	}
	public showUsers(): ShowUsersContext {
		return this.getTypedRuleContext(ShowUsersContext, 0) as ShowUsersContext;
	}
	public createUser(): CreateUserContext {
		return this.getTypedRuleContext(CreateUserContext, 0) as CreateUserContext;
	}
	public dropUser(): DropUserContext {
		return this.getTypedRuleContext(DropUserContext, 0) as DropUserContext;
	}
	public alterUser(): AlterUserContext {
		return this.getTypedRuleContext(AlterUserContext, 0) as AlterUserContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_userCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUserCommand) {
	 		listener.enterUserCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUserCommand) {
	 		listener.exitUserCommand(this);
		}
	}
}


export class PrivilegeCommandContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public showPrivileges(): ShowPrivilegesContext {
		return this.getTypedRuleContext(ShowPrivilegesContext, 0) as ShowPrivilegesContext;
	}
	public grantPrivilege(): GrantPrivilegeContext {
		return this.getTypedRuleContext(GrantPrivilegeContext, 0) as GrantPrivilegeContext;
	}
	public denyPrivilege(): DenyPrivilegeContext {
		return this.getTypedRuleContext(DenyPrivilegeContext, 0) as DenyPrivilegeContext;
	}
	public revokePrivilege(): RevokePrivilegeContext {
		return this.getTypedRuleContext(RevokePrivilegeContext, 0) as RevokePrivilegeContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_privilegeCommand;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPrivilegeCommand) {
	 		listener.enterPrivilegeCommand(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPrivilegeCommand) {
	 		listener.exitPrivilegeCommand(this);
		}
	}
}


export class ShowRolesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLES(): TerminalNode {
		return this.getToken(CypherParser.ROLES, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public USERS(): TerminalNode {
		return this.getToken(CypherParser.USERS, 0);
	}
	public POPULATED(): TerminalNode {
		return this.getToken(CypherParser.POPULATED, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_showRoles;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShowRoles) {
	 		listener.enterShowRoles(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShowRoles) {
	 		listener.exitShowRoles(this);
		}
	}
}


export class CreateRoleContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public copyRole(): CopyRoleContext {
		return this.getTypedRuleContext(CopyRoleContext, 0) as CopyRoleContext;
	}
	public orReplace(): OrReplaceContext {
		return this.getTypedRuleContext(OrReplaceContext, 0) as OrReplaceContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createRole;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateRole) {
	 		listener.enterCreateRole(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateRole) {
	 		listener.exitCreateRole(this);
		}
	}
}


export class CopyRoleContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public COPY(): TerminalNode {
		return this.getToken(CypherParser.COPY, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(CypherParser.OF, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_copyRole;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCopyRole) {
	 		listener.enterCopyRole(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCopyRole) {
	 		listener.exitCopyRole(this);
		}
	}
}


export class DropRoleContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public IF(): TerminalNode {
		return this.getToken(CypherParser.IF, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropRole;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropRole) {
	 		listener.enterDropRole(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropRole) {
	 		listener.exitDropRole(this);
		}
	}
}


export class ShowUsersContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public USERS(): TerminalNode {
		return this.getToken(CypherParser.USERS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_showUsers;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShowUsers) {
	 		listener.enterShowUsers(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShowUsers) {
	 		listener.exitShowUsers(this);
		}
	}
}


export class CreateUserContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public setPassword(): SetPasswordContext {
		return this.getTypedRuleContext(SetPasswordContext, 0) as SetPasswordContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public setStatus(): SetStatusContext {
		return this.getTypedRuleContext(SetStatusContext, 0) as SetStatusContext;
	}
	public orReplace(): OrReplaceContext {
		return this.getTypedRuleContext(OrReplaceContext, 0) as OrReplaceContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createUser;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateUser) {
	 		listener.enterCreateUser(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateUser) {
	 		listener.exitCreateUser(this);
		}
	}
}


export class DropUserContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropUser;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropUser) {
	 		listener.enterDropUser(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropUser) {
	 		listener.exitDropUser(this);
		}
	}
}


export class AlterUserContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER(): TerminalNode {
		return this.getToken(CypherParser.ALTER, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(CypherParser.CURRENT, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public PASSWORD(): TerminalNode {
		return this.getToken(CypherParser.PASSWORD, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(CypherParser.FROM, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(CypherParser.TO, 0);
	}
	public password_list(): PasswordContext[] {
		return this.getTypedRuleContexts(PasswordContext) as PasswordContext[];
	}
	public password(i: number): PasswordContext {
		return this.getTypedRuleContext(PasswordContext, i) as PasswordContext;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public setPassword(): SetPasswordContext {
		return this.getTypedRuleContext(SetPasswordContext, 0) as SetPasswordContext;
	}
	public setStatus(): SetStatusContext {
		return this.getTypedRuleContext(SetStatusContext, 0) as SetStatusContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_alterUser;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAlterUser) {
	 		listener.enterAlterUser(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAlterUser) {
	 		listener.exitAlterUser(this);
		}
	}
}


export class ShowPrivilegesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(CypherParser.PRIVILEGES, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_showPrivileges;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShowPrivileges) {
	 		listener.enterShowPrivileges(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShowPrivileges) {
	 		listener.exitShowPrivileges(this);
		}
	}
}


export class GrantPrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GRANT(): TerminalNode {
		return this.getToken(CypherParser.GRANT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public TO(): TerminalNode {
		return this.getToken(CypherParser.TO, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public datasbasePrivilege(): DatasbasePrivilegeContext {
		return this.getTypedRuleContext(DatasbasePrivilegeContext, 0) as DatasbasePrivilegeContext;
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public databaseScope(): DatabaseScopeContext {
		return this.getTypedRuleContext(DatabaseScopeContext, 0) as DatabaseScopeContext;
	}
	public grantableGraphPrivileges(): GrantableGraphPrivilegesContext {
		return this.getTypedRuleContext(GrantableGraphPrivilegesContext, 0) as GrantableGraphPrivilegesContext;
	}
	public graphScope(): GraphScopeContext {
		return this.getTypedRuleContext(GraphScopeContext, 0) as GraphScopeContext;
	}
	public elementScope(): ElementScopeContext {
		return this.getTypedRuleContext(ElementScopeContext, 0) as ElementScopeContext;
	}
	public dbmsPrivilege(): DbmsPrivilegeContext {
		return this.getTypedRuleContext(DbmsPrivilegeContext, 0) as DbmsPrivilegeContext;
	}
	public DBMS(): TerminalNode {
		return this.getToken(CypherParser.DBMS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_grantPrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterGrantPrivilege) {
	 		listener.enterGrantPrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitGrantPrivilege) {
	 		listener.exitGrantPrivilege(this);
		}
	}
}


export class DenyPrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DENY(): TerminalNode {
		return this.getToken(CypherParser.DENY, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public TO(): TerminalNode {
		return this.getToken(CypherParser.TO, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public datasbasePrivilege(): DatasbasePrivilegeContext {
		return this.getTypedRuleContext(DatasbasePrivilegeContext, 0) as DatasbasePrivilegeContext;
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public databaseScope(): DatabaseScopeContext {
		return this.getTypedRuleContext(DatabaseScopeContext, 0) as DatabaseScopeContext;
	}
	public grantableGraphPrivileges(): GrantableGraphPrivilegesContext {
		return this.getTypedRuleContext(GrantableGraphPrivilegesContext, 0) as GrantableGraphPrivilegesContext;
	}
	public graphScope(): GraphScopeContext {
		return this.getTypedRuleContext(GraphScopeContext, 0) as GraphScopeContext;
	}
	public elementScope(): ElementScopeContext {
		return this.getTypedRuleContext(ElementScopeContext, 0) as ElementScopeContext;
	}
	public dbmsPrivilege(): DbmsPrivilegeContext {
		return this.getTypedRuleContext(DbmsPrivilegeContext, 0) as DbmsPrivilegeContext;
	}
	public DBMS(): TerminalNode {
		return this.getToken(CypherParser.DBMS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_denyPrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDenyPrivilege) {
	 		listener.enterDenyPrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDenyPrivilege) {
	 		listener.exitDenyPrivilege(this);
		}
	}
}


export class RevokePrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REVOKE(): TerminalNode {
		return this.getToken(CypherParser.REVOKE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public roles(): RolesContext {
		return this.getTypedRuleContext(RolesContext, 0) as RolesContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(CypherParser.FROM, 0);
	}
	public user(): UserContext {
		return this.getTypedRuleContext(UserContext, 0) as UserContext;
	}
	public revokePart(): RevokePartContext {
		return this.getTypedRuleContext(RevokePartContext, 0) as RevokePartContext;
	}
	public GRANT(): TerminalNode {
		return this.getToken(CypherParser.GRANT, 0);
	}
	public DENY(): TerminalNode {
		return this.getToken(CypherParser.DENY, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_revokePrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRevokePrivilege) {
	 		listener.enterRevokePrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRevokePrivilege) {
	 		listener.exitRevokePrivilege(this);
		}
	}
}


export class RevokePartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public datasbasePrivilege(): DatasbasePrivilegeContext {
		return this.getTypedRuleContext(DatasbasePrivilegeContext, 0) as DatasbasePrivilegeContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public databaseScope(): DatabaseScopeContext {
		return this.getTypedRuleContext(DatabaseScopeContext, 0) as DatabaseScopeContext;
	}
	public revokeableGraphPrivileges(): RevokeableGraphPrivilegesContext {
		return this.getTypedRuleContext(RevokeableGraphPrivilegesContext, 0) as RevokeableGraphPrivilegesContext;
	}
	public graphScope(): GraphScopeContext {
		return this.getTypedRuleContext(GraphScopeContext, 0) as GraphScopeContext;
	}
	public dbmsPrivilege(): DbmsPrivilegeContext {
		return this.getTypedRuleContext(DbmsPrivilegeContext, 0) as DbmsPrivilegeContext;
	}
	public DBMS(): TerminalNode {
		return this.getToken(CypherParser.DBMS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_revokePart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRevokePart) {
	 		listener.enterRevokePart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRevokePart) {
	 		listener.exitRevokePart(this);
		}
	}
}


export class DatabaseScopeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(CypherParser.DATABASES, 0);
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_databaseScope;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDatabaseScope) {
	 		listener.enterDatabaseScope(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDatabaseScope) {
	 		listener.exitDatabaseScope(this);
		}
	}
}


export class GraphScopeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public GRAPH(): TerminalNode {
		return this.getToken(CypherParser.GRAPH, 0);
	}
	public GRAPHS(): TerminalNode {
		return this.getToken(CypherParser.GRAPHS, 0);
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_graphScope;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterGraphScope) {
	 		listener.enterGraphScope(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitGraphScope) {
	 		listener.exitGraphScope(this);
		}
	}
}


export class RolesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_roles;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRoles) {
	 		listener.enterRoles(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRoles) {
	 		listener.exitRoles(this);
		}
	}
}


export class GrantableGraphPrivilegesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public revokeableGraphPrivileges(): RevokeableGraphPrivilegesContext {
		return this.getTypedRuleContext(RevokeableGraphPrivilegesContext, 0) as RevokeableGraphPrivilegesContext;
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public propertiesList(): PropertiesListContext {
		return this.getTypedRuleContext(PropertiesListContext, 0) as PropertiesListContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_grantableGraphPrivileges;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterGrantableGraphPrivileges) {
	 		listener.enterGrantableGraphPrivileges(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitGrantableGraphPrivileges) {
	 		listener.exitGrantableGraphPrivileges(this);
		}
	}
}


export class RevokeableGraphPrivilegesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRAVERSE(): TerminalNode {
		return this.getToken(CypherParser.TRAVERSE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(CypherParser.READ, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public propertiesList(): PropertiesListContext {
		return this.getTypedRuleContext(PropertiesListContext, 0) as PropertiesListContext;
	}
	public WRITE(): TerminalNode {
		return this.getToken(CypherParser.WRITE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_revokeableGraphPrivileges;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRevokeableGraphPrivileges) {
	 		listener.enterRevokeableGraphPrivileges(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRevokeableGraphPrivileges) {
	 		listener.exitRevokeableGraphPrivileges(this);
		}
	}
}


export class DatasbasePrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACCESS(): TerminalNode {
		return this.getToken(CypherParser.ACCESS, 0);
	}
	public START(): TerminalNode {
		return this.getToken(CypherParser.START, 0);
	}
	public STOP(): TerminalNode {
		return this.getToken(CypherParser.STOP, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public INDEX(): TerminalNode {
		return this.getToken(CypherParser.INDEX, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(CypherParser.INDEXES, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public MANAGEMENT(): TerminalNode {
		return this.getToken(CypherParser.MANAGEMENT, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public CONSTRAINTS(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINTS, 0);
	}
	public NEW(): TerminalNode {
		return this.getToken(CypherParser.NEW, 0);
	}
	public LABEL(): TerminalNode {
		return this.getToken(CypherParser.LABEL, 0);
	}
	public LABELS(): TerminalNode {
		return this.getToken(CypherParser.LABELS, 0);
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(CypherParser.TYPE, 0);
	}
	public TYPES(): TerminalNode {
		return this.getToken(CypherParser.TYPES, 0);
	}
	public RELATIONSHIP(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIP, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(CypherParser.NAME, 0);
	}
	public NAMES(): TerminalNode {
		return this.getToken(CypherParser.NAMES, 0);
	}
	public PROPERTY(): TerminalNode {
		return this.getToken(CypherParser.PROPERTY, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(CypherParser.PRIVILEGES, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_datasbasePrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDatasbasePrivilege) {
	 		listener.enterDatasbasePrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDatasbasePrivilege) {
	 		listener.exitDatasbasePrivilege(this);
		}
	}
}


export class DbmsPrivilegeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public MANAGEMENT(): TerminalNode {
		return this.getToken(CypherParser.MANAGEMENT, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(CypherParser.ASSIGN, 0);
	}
	public REMOVE(): TerminalNode {
		return this.getToken(CypherParser.REMOVE, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dbmsPrivilege;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDbmsPrivilege) {
	 		listener.enterDbmsPrivilege(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDbmsPrivilege) {
	 		listener.exitDbmsPrivilege(this);
		}
	}
}


export class ElementScopeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public propertiesList(): PropertiesListContext {
		return this.getTypedRuleContext(PropertiesListContext, 0) as PropertiesListContext;
	}
	public RELATIONSHIP(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIP, 0);
	}
	public RELATIONSHIPS(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIPS, 0);
	}
	public propertyScope(): PropertyScopeContext {
		return this.getTypedRuleContext(PropertyScopeContext, 0) as PropertyScopeContext;
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public NODES(): TerminalNode {
		return this.getToken(CypherParser.NODES, 0);
	}
	public ELEMENT(): TerminalNode {
		return this.getToken(CypherParser.ELEMENT, 0);
	}
	public ELEMENTS(): TerminalNode {
		return this.getToken(CypherParser.ELEMENTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_elementScope;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterElementScope) {
	 		listener.enterElementScope(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitElementScope) {
	 		listener.exitElementScope(this);
		}
	}
}


export class PropertiesListContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertiesList;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertiesList) {
	 		listener.enterPropertiesList(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertiesList) {
	 		listener.exitPropertiesList(this);
		}
	}
}


export class PropertyScopeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyScope;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyScope) {
	 		listener.enterPropertyScope(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyScope) {
	 		listener.exitPropertyScope(this);
		}
	}
}


export class ShowDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(CypherParser.DEFAULT, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(CypherParser.DATABASES, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_showDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShowDatabase) {
	 		listener.enterShowDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShowDatabase) {
	 		listener.exitShowDatabase(this);
		}
	}
}


export class CreateDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public ifNotExists(): IfNotExistsContext {
		return this.getTypedRuleContext(IfNotExistsContext, 0) as IfNotExistsContext;
	}
	public orReplace(): OrReplaceContext {
		return this.getTypedRuleContext(OrReplaceContext, 0) as OrReplaceContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateDatabase) {
	 		listener.enterCreateDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateDatabase) {
	 		listener.exitCreateDatabase(this);
		}
	}
}


export class DropDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public ifExists(): IfExistsContext {
		return this.getTypedRuleContext(IfExistsContext, 0) as IfExistsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropDatabase) {
	 		listener.enterDropDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropDatabase) {
	 		listener.exitDropDatabase(this);
		}
	}
}


export class StartDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START(): TerminalNode {
		return this.getToken(CypherParser.START, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_startDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStartDatabase) {
	 		listener.enterStartDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStartDatabase) {
	 		listener.exitStartDatabase(this);
		}
	}
}


export class StopDatabaseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STOP(): TerminalNode {
		return this.getToken(CypherParser.STOP, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_stopDatabase;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStopDatabase) {
	 		listener.enterStopDatabase(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStopDatabase) {
	 		listener.exitStopDatabase(this);
		}
	}
}


export class IfNotExistsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(CypherParser.IF, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public NOT(): TerminalNode {
		return this.getToken(CypherParser.NOT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_ifNotExists;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIfNotExists) {
	 		listener.enterIfNotExists(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIfNotExists) {
	 		listener.exitIfNotExists(this);
		}
	}
}


export class IfExistsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(CypherParser.IF, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_ifExists;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIfExists) {
	 		listener.enterIfExists(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIfExists) {
	 		listener.exitIfExists(this);
		}
	}
}


export class OrReplaceContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OR(): TerminalNode {
		return this.getToken(CypherParser.OR, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(CypherParser.REPLACE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_orReplace;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOrReplace) {
	 		listener.enterOrReplace(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOrReplace) {
	 		listener.exitOrReplace(this);
		}
	}
}


export class SetPasswordContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public PASSWORD(): TerminalNode {
		return this.getToken(CypherParser.PASSWORD, 0);
	}
	public password(): PasswordContext {
		return this.getTypedRuleContext(PasswordContext, 0) as PasswordContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
	public passwordStatus(): PasswordStatusContext {
		return this.getTypedRuleContext(PasswordStatusContext, 0) as PasswordStatusContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_setPassword;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSetPassword) {
	 		listener.enterSetPassword(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSetPassword) {
	 		listener.exitSetPassword(this);
		}
	}
}


export class PasswordStatusContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHANGE(): TerminalNode {
		return this.getToken(CypherParser.CHANGE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public REQUIRED(): TerminalNode {
		return this.getToken(CypherParser.REQUIRED, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(CypherParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_passwordStatus;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPasswordStatus) {
	 		listener.enterPasswordStatus(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPasswordStatus) {
	 		listener.exitPasswordStatus(this);
		}
	}
}


export class SetStatusContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public STATUS(): TerminalNode {
		return this.getToken(CypherParser.STATUS, 0);
	}
	public userStatus(): UserStatusContext {
		return this.getTypedRuleContext(UserStatusContext, 0) as UserStatusContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_setStatus;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSetStatus) {
	 		listener.enterSetStatus(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSetStatus) {
	 		listener.exitSetStatus(this);
		}
	}
}


export class UserStatusContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ACTIVE(): TerminalNode {
		return this.getToken(CypherParser.ACTIVE, 0);
	}
	public SUSPENDED(): TerminalNode {
		return this.getToken(CypherParser.SUSPENDED, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_userStatus;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUserStatus) {
	 		listener.enterUserStatus(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUserStatus) {
	 		listener.exitUserStatus(this);
		}
	}
}


export class CreateUniqueConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public uniqueConstraint(): UniqueConstraintContext {
		return this.getTypedRuleContext(UniqueConstraintContext, 0) as UniqueConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createUniqueConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateUniqueConstraint) {
	 		listener.enterCreateUniqueConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateUniqueConstraint) {
	 		listener.exitCreateUniqueConstraint(this);
		}
	}
}


export class CreateNodeKeyConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public nodeKeyConstraint(): NodeKeyConstraintContext {
		return this.getTypedRuleContext(NodeKeyConstraintContext, 0) as NodeKeyConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createNodeKeyConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateNodeKeyConstraint) {
	 		listener.enterCreateNodeKeyConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateNodeKeyConstraint) {
	 		listener.exitCreateNodeKeyConstraint(this);
		}
	}
}


export class CreateNodePropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public nodePropertyExistenceConstraint(): NodePropertyExistenceConstraintContext {
		return this.getTypedRuleContext(NodePropertyExistenceConstraintContext, 0) as NodePropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createNodePropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateNodePropertyExistenceConstraint) {
	 		listener.enterCreateNodePropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateNodePropertyExistenceConstraint) {
	 		listener.exitCreateNodePropertyExistenceConstraint(this);
		}
	}
}


export class CreateRelationshipPropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public relationshipPropertyExistenceConstraint(): RelationshipPropertyExistenceConstraintContext {
		return this.getTypedRuleContext(RelationshipPropertyExistenceConstraintContext, 0) as RelationshipPropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createRelationshipPropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateRelationshipPropertyExistenceConstraint) {
	 		listener.enterCreateRelationshipPropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateRelationshipPropertyExistenceConstraint) {
	 		listener.exitCreateRelationshipPropertyExistenceConstraint(this);
		}
	}
}


export class CreateIndexContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public index(): IndexContext {
		return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createIndex;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateIndex) {
	 		listener.enterCreateIndex(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateIndex) {
	 		listener.exitCreateIndex(this);
		}
	}
}


export class DropUniqueConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public uniqueConstraint(): UniqueConstraintContext {
		return this.getTypedRuleContext(UniqueConstraintContext, 0) as UniqueConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropUniqueConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropUniqueConstraint) {
	 		listener.enterDropUniqueConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropUniqueConstraint) {
	 		listener.exitDropUniqueConstraint(this);
		}
	}
}


export class DropNodeKeyConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public nodeKeyConstraint(): NodeKeyConstraintContext {
		return this.getTypedRuleContext(NodeKeyConstraintContext, 0) as NodeKeyConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropNodeKeyConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropNodeKeyConstraint) {
	 		listener.enterDropNodeKeyConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropNodeKeyConstraint) {
	 		listener.exitDropNodeKeyConstraint(this);
		}
	}
}


export class DropNodePropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public nodePropertyExistenceConstraint(): NodePropertyExistenceConstraintContext {
		return this.getTypedRuleContext(NodePropertyExistenceConstraintContext, 0) as NodePropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropNodePropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropNodePropertyExistenceConstraint) {
	 		listener.enterDropNodePropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropNodePropertyExistenceConstraint) {
	 		listener.exitDropNodePropertyExistenceConstraint(this);
		}
	}
}


export class DropRelationshipPropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public relationshipPropertyExistenceConstraint(): RelationshipPropertyExistenceConstraintContext {
		return this.getTypedRuleContext(RelationshipPropertyExistenceConstraintContext, 0) as RelationshipPropertyExistenceConstraintContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropRelationshipPropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropRelationshipPropertyExistenceConstraint) {
	 		listener.enterDropRelationshipPropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropRelationshipPropertyExistenceConstraint) {
	 		listener.exitDropRelationshipPropertyExistenceConstraint(this);
		}
	}
}


export class DropIndexContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public index(): IndexContext {
		return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dropIndex;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDropIndex) {
	 		listener.enterDropIndex(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDropIndex) {
	 		listener.exitDropIndex(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INDEX(): TerminalNode {
		return this.getToken(CypherParser.INDEX, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public propertyKeys(): PropertyKeysContext {
		return this.getTypedRuleContext(PropertyKeysContext, 0) as PropertyKeysContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_index;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIndex) {
	 		listener.enterIndex(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIndex) {
	 		listener.exitIndex(this);
		}
	}
}


export class UniqueConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
	public IS(): TerminalNode {
		return this.getToken(CypherParser.IS, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(CypherParser.UNIQUE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_uniqueConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUniqueConstraint) {
	 		listener.enterUniqueConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUniqueConstraint) {
	 		listener.exitUniqueConstraint(this);
		}
	}
}


export class NodeKeyConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public propertyExpressions(): PropertyExpressionsContext {
		return this.getTypedRuleContext(PropertyExpressionsContext, 0) as PropertyExpressionsContext;
	}
	public IS(): TerminalNode {
		return this.getToken(CypherParser.IS, 0);
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(CypherParser.KEY, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodeKeyConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodeKeyConstraint) {
	 		listener.enterNodeKeyConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodeKeyConstraint) {
	 		listener.exitNodeKeyConstraint(this);
		}
	}
}


export class NodePropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodePropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodePropertyExistenceConstraint) {
	 		listener.enterNodePropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodePropertyExistenceConstraint) {
	 		listener.exitNodePropertyExistenceConstraint(this);
		}
	}
}


export class RelationshipPropertyExistenceConstraintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public relationshipPatternSyntax(): RelationshipPatternSyntaxContext {
		return this.getTypedRuleContext(RelationshipPatternSyntaxContext, 0) as RelationshipPatternSyntaxContext;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPropertyExistenceConstraint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPropertyExistenceConstraint) {
	 		listener.enterRelationshipPropertyExistenceConstraint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPropertyExistenceConstraint) {
	 		listener.exitRelationshipPropertyExistenceConstraint(this);
		}
	}
}


export class RelationshipPatternSyntaxContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dash_list(): DashContext[] {
		return this.getTypedRuleContexts(DashContext) as DashContext[];
	}
	public dash(i: number): DashContext {
		return this.getTypedRuleContext(DashContext, i) as DashContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public relType(): RelTypeContext {
		return this.getTypedRuleContext(RelTypeContext, 0) as RelTypeContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public rightArrowHead(): RightArrowHeadContext {
		return this.getTypedRuleContext(RightArrowHeadContext, 0) as RightArrowHeadContext;
	}
	public leftArrowHead(): LeftArrowHeadContext {
		return this.getTypedRuleContext(LeftArrowHeadContext, 0) as LeftArrowHeadContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPatternSyntax;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPatternSyntax) {
	 		listener.enterRelationshipPatternSyntax(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPatternSyntax) {
	 		listener.exitRelationshipPatternSyntax(this);
		}
	}
}


export class LoadCSVClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOAD(): TerminalNode {
		return this.getToken(CypherParser.LOAD, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public CSV(): TerminalNode {
		return this.getToken(CypherParser.CSV, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(CypherParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public HEADERS(): TerminalNode {
		return this.getToken(CypherParser.HEADERS, 0);
	}
	public FIELDTERMINATOR(): TerminalNode {
		return this.getToken(CypherParser.FIELDTERMINATOR, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_loadCSVClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLoadCSVClause) {
	 		listener.enterLoadCSVClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLoadCSVClause) {
	 		listener.exitLoadCSVClause(this);
		}
	}
}


export class MatchClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(CypherParser.OPTIONAL, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public hint_list(): HintContext[] {
		return this.getTypedRuleContexts(HintContext) as HintContext[];
	}
	public hint(i: number): HintContext {
		return this.getTypedRuleContext(HintContext, i) as HintContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_matchClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMatchClause) {
	 		listener.enterMatchClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMatchClause) {
	 		listener.exitMatchClause(this);
		}
	}
}


export class UnwindClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNWIND(): TerminalNode {
		return this.getToken(CypherParser.UNWIND, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_unwindClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUnwindClause) {
	 		listener.enterUnwindClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUnwindClause) {
	 		listener.exitUnwindClause(this);
		}
	}
}


export class MergeClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MERGE(): TerminalNode {
		return this.getToken(CypherParser.MERGE, 0);
	}
	public patternPart(): PatternPartContext {
		return this.getTypedRuleContext(PatternPartContext, 0) as PatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public mergeAction_list(): MergeActionContext[] {
		return this.getTypedRuleContexts(MergeActionContext) as MergeActionContext[];
	}
	public mergeAction(i: number): MergeActionContext {
		return this.getTypedRuleContext(MergeActionContext, i) as MergeActionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mergeClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMergeClause) {
	 		listener.enterMergeClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMergeClause) {
	 		listener.exitMergeClause(this);
		}
	}
}


export class MergeActionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public setClause(): SetClauseContext {
		return this.getTypedRuleContext(SetClauseContext, 0) as SetClauseContext;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mergeAction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMergeAction) {
	 		listener.enterMergeAction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMergeAction) {
	 		listener.exitMergeAction(this);
		}
	}
}


export class CreateClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateClause) {
	 		listener.enterCreateClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateClause) {
	 		listener.exitCreateClause(this);
		}
	}
}


export class CreateUniqueClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(CypherParser.UNIQUE, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_createUniqueClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCreateUniqueClause) {
	 		listener.enterCreateUniqueClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCreateUniqueClause) {
	 		listener.exitCreateUniqueClause(this);
		}
	}
}


export class SetClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public setItem_list(): SetItemContext[] {
		return this.getTypedRuleContexts(SetItemContext) as SetItemContext[];
	}
	public setItem(i: number): SetItemContext {
		return this.getTypedRuleContext(SetItemContext, i) as SetItemContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_setClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSetClause) {
	 		listener.enterSetClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSetClause) {
	 		listener.exitSetClause(this);
		}
	}
}


export class SetItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabels(): NodeLabelsContext {
		return this.getTypedRuleContext(NodeLabelsContext, 0) as NodeLabelsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_setItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSetItem) {
	 		listener.enterSetItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSetItem) {
	 		listener.exitSetItem(this);
		}
	}
}


export class DeleteClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE(): TerminalNode {
		return this.getToken(CypherParser.DELETE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public DETACH(): TerminalNode {
		return this.getToken(CypherParser.DETACH, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_deleteClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDeleteClause) {
	 		listener.enterDeleteClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDeleteClause) {
	 		listener.exitDeleteClause(this);
		}
	}
}


export class RemoveClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REMOVE(): TerminalNode {
		return this.getToken(CypherParser.REMOVE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public removeItem_list(): RemoveItemContext[] {
		return this.getTypedRuleContexts(RemoveItemContext) as RemoveItemContext[];
	}
	public removeItem(i: number): RemoveItemContext {
		return this.getTypedRuleContext(RemoveItemContext, i) as RemoveItemContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_removeClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRemoveClause) {
	 		listener.enterRemoveClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRemoveClause) {
	 		listener.exitRemoveClause(this);
		}
	}
}


export class RemoveItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabels(): NodeLabelsContext {
		return this.getTypedRuleContext(NodeLabelsContext, 0) as NodeLabelsContext;
	}
	public propertyExpression(): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, 0) as PropertyExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_removeItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRemoveItem) {
	 		listener.enterRemoveItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRemoveItem) {
	 		listener.exitRemoveItem(this);
		}
	}
}


export class ForeachClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOREACH(): TerminalNode {
		return this.getToken(CypherParser.FOREACH, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public clause_list(): ClauseContext[] {
		return this.getTypedRuleContexts(ClauseContext) as ClauseContext[];
	}
	public clause(i: number): ClauseContext {
		return this.getTypedRuleContext(ClauseContext, i) as ClauseContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_foreachClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterForeachClause) {
	 		listener.enterForeachClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitForeachClause) {
	 		listener.exitForeachClause(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public returnBody(): ReturnBodyContext {
		return this.getTypedRuleContext(ReturnBodyContext, 0) as ReturnBodyContext;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_withClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterWithClause) {
	 		listener.enterWithClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitWithClause) {
	 		listener.exitWithClause(this);
		}
	}
}


export class ReturnClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(CypherParser.RETURN, 0);
	}
	public returnBody(): ReturnBodyContext {
		return this.getTypedRuleContext(ReturnBodyContext, 0) as ReturnBodyContext;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_returnClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReturnClause) {
	 		listener.enterReturnClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReturnClause) {
	 		listener.exitReturnClause(this);
		}
	}
}


export class ReturnBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public returnItems(): ReturnItemsContext {
		return this.getTypedRuleContext(ReturnItemsContext, 0) as ReturnItemsContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public order(): OrderContext {
		return this.getTypedRuleContext(OrderContext, 0) as OrderContext;
	}
	public skip(): SkipContext {
		return this.getTypedRuleContext(SkipContext, 0) as SkipContext;
	}
	public limit(): LimitContext {
		return this.getTypedRuleContext(LimitContext, 0) as LimitContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_returnBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReturnBody) {
	 		listener.enterReturnBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReturnBody) {
	 		listener.exitReturnBody(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureInvocation(): ProcedureInvocationContext {
		return this.getTypedRuleContext(ProcedureInvocationContext, 0) as ProcedureInvocationContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public procedureResults(): ProcedureResultsContext {
		return this.getTypedRuleContext(ProcedureResultsContext, 0) as ProcedureResultsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_func;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFunc) {
	 		listener.enterFunc(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFunc) {
	 		listener.exitFunc(this);
		}
	}
}


export class ReturnItemsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public returnItem_list(): ReturnItemContext[] {
		return this.getTypedRuleContexts(ReturnItemContext) as ReturnItemContext[];
	}
	public returnItem(i: number): ReturnItemContext {
		return this.getTypedRuleContext(ReturnItemContext, i) as ReturnItemContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public func(): FuncContext {
		return this.getTypedRuleContext(FuncContext, 0) as FuncContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_returnItems;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReturnItems) {
	 		listener.enterReturnItems(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReturnItems) {
	 		listener.exitReturnItems(this);
		}
	}
}


export class ReturnItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_returnItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReturnItem) {
	 		listener.enterReturnItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReturnItem) {
	 		listener.exitReturnItem(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CALL(): TerminalNode {
		return this.getToken(CypherParser.CALL, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public procedureInvocation(): ProcedureInvocationContext {
		return this.getTypedRuleContext(ProcedureInvocationContext, 0) as ProcedureInvocationContext;
	}
	public procedureResults(): ProcedureResultsContext {
		return this.getTypedRuleContext(ProcedureResultsContext, 0) as ProcedureResultsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_call;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
}


export class ProcedureInvocationContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureInvocationBody(): ProcedureInvocationBodyContext {
		return this.getTypedRuleContext(ProcedureInvocationBodyContext, 0) as ProcedureInvocationBodyContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public procedureArguments(): ProcedureArgumentsContext {
		return this.getTypedRuleContext(ProcedureArgumentsContext, 0) as ProcedureArgumentsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureInvocation;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureInvocation) {
	 		listener.enterProcedureInvocation(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureInvocation) {
	 		listener.exitProcedureInvocation(this);
		}
	}
}


export class ProcedureInvocationBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public procedureName(): ProcedureNameContext {
		return this.getTypedRuleContext(ProcedureNameContext, 0) as ProcedureNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureInvocationBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureInvocationBody) {
	 		listener.enterProcedureInvocationBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureInvocationBody) {
	 		listener.exitProcedureInvocationBody(this);
		}
	}
}


export class ProcedureArgumentsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureArguments;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureArguments) {
	 		listener.enterProcedureArguments(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureArguments) {
	 		listener.exitProcedureArguments(this);
		}
	}
}


export class ProcedureResultsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YIELD(): TerminalNode {
		return this.getToken(CypherParser.YIELD, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public procedureResult_list(): ProcedureResultContext[] {
		return this.getTypedRuleContexts(ProcedureResultContext) as ProcedureResultContext[];
	}
	public procedureResult(i: number): ProcedureResultContext {
		return this.getTypedRuleContext(ProcedureResultContext, i) as ProcedureResultContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureResults;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureResults) {
	 		listener.enterProcedureResults(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureResults) {
	 		listener.exitProcedureResults(this);
		}
	}
}


export class ProcedureResultContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasedProcedureResult(): AliasedProcedureResultContext {
		return this.getTypedRuleContext(AliasedProcedureResultContext, 0) as AliasedProcedureResultContext;
	}
	public simpleProcedureResult(): SimpleProcedureResultContext {
		return this.getTypedRuleContext(SimpleProcedureResultContext, 0) as SimpleProcedureResultContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureResult;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureResult) {
	 		listener.enterProcedureResult(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureResult) {
	 		listener.exitProcedureResult(this);
		}
	}
}


export class AliasedProcedureResultContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureOutput(): ProcedureOutputContext {
		return this.getTypedRuleContext(ProcedureOutputContext, 0) as ProcedureOutputContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_aliasedProcedureResult;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAliasedProcedureResult) {
	 		listener.enterAliasedProcedureResult(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAliasedProcedureResult) {
	 		listener.exitAliasedProcedureResult(this);
		}
	}
}


export class SimpleProcedureResultContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureOutput(): ProcedureOutputContext {
		return this.getTypedRuleContext(ProcedureOutputContext, 0) as ProcedureOutputContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_simpleProcedureResult;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSimpleProcedureResult) {
	 		listener.enterSimpleProcedureResult(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSimpleProcedureResult) {
	 		listener.exitSimpleProcedureResult(this);
		}
	}
}


export class ProcedureOutputContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureOutput;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureOutput) {
	 		listener.enterProcedureOutput(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureOutput) {
	 		listener.exitProcedureOutput(this);
		}
	}
}


export class OrderContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER(): TerminalNode {
		return this.getToken(CypherParser.ORDER, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public BY(): TerminalNode {
		return this.getToken(CypherParser.BY, 0);
	}
	public sortItem_list(): SortItemContext[] {
		return this.getTypedRuleContexts(SortItemContext) as SortItemContext[];
	}
	public sortItem(i: number): SortItemContext {
		return this.getTypedRuleContext(SortItemContext, i) as SortItemContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_order;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOrder) {
	 		listener.enterOrder(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOrder) {
	 		listener.exitOrder(this);
		}
	}
}


export class SkipContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_SKIP(): TerminalNode {
		return this.getToken(CypherParser.L_SKIP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_skip;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSkip) {
	 		listener.enterSkip(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSkip) {
	 		listener.exitSkip(this);
		}
	}
}


export class LimitContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIMIT(): TerminalNode {
		return this.getToken(CypherParser.LIMIT, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_limit;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLimit) {
	 		listener.enterLimit(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLimit) {
	 		listener.exitLimit(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ASCENDING(): TerminalNode {
		return this.getToken(CypherParser.ASCENDING, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(CypherParser.ASC, 0);
	}
	public DESCENDING(): TerminalNode {
		return this.getToken(CypherParser.DESCENDING, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(CypherParser.DESC, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_sortItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSortItem) {
	 		listener.enterSortItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSortItem) {
	 		listener.exitSortItem(this);
		}
	}
}


export class HintContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public USING(): TerminalNode {
		return this.getToken(CypherParser.USING, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(CypherParser.INDEX, 0);
	}
	public variable_list(): VariableContext[] {
		return this.getTypedRuleContexts(VariableContext) as VariableContext[];
	}
	public variable(i: number): VariableContext {
		return this.getTypedRuleContext(VariableContext, i) as VariableContext;
	}
	public nodeLabel(): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, 0) as NodeLabelContext;
	}
	public propertyKeys(): PropertyKeysContext {
		return this.getTypedRuleContext(PropertyKeysContext, 0) as PropertyKeysContext;
	}
	public JOIN(): TerminalNode {
		return this.getToken(CypherParser.JOIN, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public SCAN(): TerminalNode {
		return this.getToken(CypherParser.SCAN, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_hint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterHint) {
	 		listener.enterHint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitHint) {
	 		listener.exitHint(this);
		}
	}
}


export class StartClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START(): TerminalNode {
		return this.getToken(CypherParser.START, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public startPoint_list(): StartPointContext[] {
		return this.getTypedRuleContexts(StartPointContext) as StartPointContext[];
	}
	public startPoint(i: number): StartPointContext {
		return this.getTypedRuleContext(StartPointContext, i) as StartPointContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_startClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStartClause) {
	 		listener.enterStartClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStartClause) {
	 		listener.exitStartClause(this);
		}
	}
}


export class StartPointContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public lookup(): LookupContext {
		return this.getTypedRuleContext(LookupContext, 0) as LookupContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_startPoint;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStartPoint) {
	 		listener.enterStartPoint(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStartPoint) {
	 		listener.exitStartPoint(this);
		}
	}
}


export class LookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nodeLookup(): NodeLookupContext {
		return this.getTypedRuleContext(NodeLookupContext, 0) as NodeLookupContext;
	}
	public relationshipLookup(): RelationshipLookupContext {
		return this.getTypedRuleContext(RelationshipLookupContext, 0) as RelationshipLookupContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_lookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLookup) {
	 		listener.enterLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLookup) {
	 		listener.exitLookup(this);
		}
	}
}


export class NodeLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public identifiedIndexLookup(): IdentifiedIndexLookupContext {
		return this.getTypedRuleContext(IdentifiedIndexLookupContext, 0) as IdentifiedIndexLookupContext;
	}
	public indexQuery(): IndexQueryContext {
		return this.getTypedRuleContext(IndexQueryContext, 0) as IndexQueryContext;
	}
	public idLookup(): IdLookupContext {
		return this.getTypedRuleContext(IdLookupContext, 0) as IdLookupContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodeLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodeLookup) {
	 		listener.enterNodeLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodeLookup) {
	 		listener.exitNodeLookup(this);
		}
	}
}


export class RelationshipLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RELATIONSHIP(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIP, 0);
	}
	public REL(): TerminalNode {
		return this.getToken(CypherParser.REL, 0);
	}
	public identifiedIndexLookup(): IdentifiedIndexLookupContext {
		return this.getTypedRuleContext(IdentifiedIndexLookupContext, 0) as IdentifiedIndexLookupContext;
	}
	public indexQuery(): IndexQueryContext {
		return this.getTypedRuleContext(IndexQueryContext, 0) as IndexQueryContext;
	}
	public idLookup(): IdLookupContext {
		return this.getTypedRuleContext(IdLookupContext, 0) as IdLookupContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipLookup) {
	 		listener.enterRelationshipLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipLookup) {
	 		listener.exitRelationshipLookup(this);
		}
	}
}


export class IdentifiedIndexLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_identifiedIndexLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIdentifiedIndexLookup) {
	 		listener.enterIdentifiedIndexLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIdentifiedIndexLookup) {
	 		listener.exitIdentifiedIndexLookup(this);
		}
	}
}


export class IndexQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_indexQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIndexQuery) {
	 		listener.enterIndexQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIndexQuery) {
	 		listener.exitIndexQuery(this);
		}
	}
}


export class IdLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literalIds(): LiteralIdsContext {
		return this.getTypedRuleContext(LiteralIdsContext, 0) as LiteralIdsContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_idLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIdLookup) {
	 		listener.enterIdLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIdLookup) {
	 		listener.exitIdLookup(this);
		}
	}
}


export class LiteralIdsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integerLiteral_list(): IntegerLiteralContext[] {
		return this.getTypedRuleContexts(IntegerLiteralContext) as IntegerLiteralContext[];
	}
	public integerLiteral(i: number): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, i) as IntegerLiteralContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_literalIds;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLiteralIds) {
	 		listener.enterLiteralIds(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLiteralIds) {
	 		listener.exitLiteralIds(this);
		}
	}
}


export class WhereContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHERE(): TerminalNode {
		return this.getToken(CypherParser.WHERE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_where;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterWhere) {
	 		listener.enterWhere(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitWhere) {
	 		listener.exitWhere(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public patternPart_list(): PatternPartContext[] {
		return this.getTypedRuleContexts(PatternPartContext) as PatternPartContext[];
	}
	public patternPart(i: number): PatternPartContext {
		return this.getTypedRuleContext(PatternPartContext, i) as PatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_pattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPattern) {
	 		listener.enterPattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPattern) {
	 		listener.exitPattern(this);
		}
	}
}


export class PatternPartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public anonymousPatternPart(): AnonymousPatternPartContext {
		return this.getTypedRuleContext(AnonymousPatternPartContext, 0) as AnonymousPatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_patternPart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPatternPart) {
	 		listener.enterPatternPart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPatternPart) {
	 		listener.exitPatternPart(this);
		}
	}
}


export class AnonymousPatternPartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shortestPathPatternFunction(): ShortestPathPatternFunctionContext {
		return this.getTypedRuleContext(ShortestPathPatternFunctionContext, 0) as ShortestPathPatternFunctionContext;
	}
	public patternElement(): PatternElementContext {
		return this.getTypedRuleContext(PatternElementContext, 0) as PatternElementContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_anonymousPatternPart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAnonymousPatternPart) {
	 		listener.enterAnonymousPatternPart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAnonymousPatternPart) {
	 		listener.exitAnonymousPatternPart(this);
		}
	}
}


export class PatternElementContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nodePattern(): NodePatternContext {
		return this.getTypedRuleContext(NodePatternContext, 0) as NodePatternContext;
	}
	public patternElementChain_list(): PatternElementChainContext[] {
		return this.getTypedRuleContexts(PatternElementChainContext) as PatternElementChainContext[];
	}
	public patternElementChain(i: number): PatternElementChainContext {
		return this.getTypedRuleContext(PatternElementChainContext, i) as PatternElementChainContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public patternElement(): PatternElementContext {
		return this.getTypedRuleContext(PatternElementContext, 0) as PatternElementContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_patternElement;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPatternElement) {
	 		listener.enterPatternElement(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPatternElement) {
	 		listener.exitPatternElement(this);
		}
	}
}


export class NodePatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public nodeLabels(): NodeLabelsContext {
		return this.getTypedRuleContext(NodeLabelsContext, 0) as NodeLabelsContext;
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodePattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodePattern) {
	 		listener.enterNodePattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodePattern) {
	 		listener.exitNodePattern(this);
		}
	}
}


export class PatternElementChainContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipPattern(): RelationshipPatternContext {
		return this.getTypedRuleContext(RelationshipPatternContext, 0) as RelationshipPatternContext;
	}
	public nodePattern(): NodePatternContext {
		return this.getTypedRuleContext(NodePatternContext, 0) as NodePatternContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_patternElementChain;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPatternElementChain) {
	 		listener.enterPatternElementChain(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPatternElementChain) {
	 		listener.exitPatternElementChain(this);
		}
	}
}


export class RelationshipPatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipPatternStart(): RelationshipPatternStartContext {
		return this.getTypedRuleContext(RelationshipPatternStartContext, 0) as RelationshipPatternStartContext;
	}
	public relationshipPatternEnd(): RelationshipPatternEndContext {
		return this.getTypedRuleContext(RelationshipPatternEndContext, 0) as RelationshipPatternEndContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public relationshipDetail(): RelationshipDetailContext {
		return this.getTypedRuleContext(RelationshipDetailContext, 0) as RelationshipDetailContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPattern) {
	 		listener.enterRelationshipPattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPattern) {
	 		listener.exitRelationshipPattern(this);
		}
	}
}


export class RelationshipPatternStartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public leftArrowHead(): LeftArrowHeadContext {
		return this.getTypedRuleContext(LeftArrowHeadContext, 0) as LeftArrowHeadContext;
	}
	public dash(): DashContext {
		return this.getTypedRuleContext(DashContext, 0) as DashContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPatternStart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPatternStart) {
	 		listener.enterRelationshipPatternStart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPatternStart) {
	 		listener.exitRelationshipPatternStart(this);
		}
	}
}


export class RelationshipPatternEndContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dash(): DashContext {
		return this.getTypedRuleContext(DashContext, 0) as DashContext;
	}
	public rightArrowHead(): RightArrowHeadContext {
		return this.getTypedRuleContext(RightArrowHeadContext, 0) as RightArrowHeadContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipPatternEnd;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipPatternEnd) {
	 		listener.enterRelationshipPatternEnd(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipPatternEnd) {
	 		listener.exitRelationshipPatternEnd(this);
		}
	}
}


export class RelationshipDetailContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public relationshipTypes(): RelationshipTypesContext {
		return this.getTypedRuleContext(RelationshipTypesContext, 0) as RelationshipTypesContext;
	}
	public rangeLiteral(): RangeLiteralContext {
		return this.getTypedRuleContext(RangeLiteralContext, 0) as RangeLiteralContext;
	}
	public properties(): PropertiesContext {
		return this.getTypedRuleContext(PropertiesContext, 0) as PropertiesContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipDetail;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipDetail) {
	 		listener.enterRelationshipDetail(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipDetail) {
	 		listener.exitRelationshipDetail(this);
		}
	}
}


export class PropertiesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mapLiteral(): MapLiteralContext {
		return this.getTypedRuleContext(MapLiteralContext, 0) as MapLiteralContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_properties;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProperties) {
	 		listener.enterProperties(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProperties) {
	 		listener.exitProperties(this);
		}
	}
}


export class RelTypeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relTypeName(): RelTypeNameContext {
		return this.getTypedRuleContext(RelTypeNameContext, 0) as RelTypeNameContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relType;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelType) {
	 		listener.enterRelType(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelType) {
	 		listener.exitRelType(this);
		}
	}
}


export class RelationshipTypesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipType(): RelationshipTypeContext {
		return this.getTypedRuleContext(RelationshipTypeContext, 0) as RelationshipTypeContext;
	}
	public relationshipTypeOptionalColon_list(): RelationshipTypeOptionalColonContext[] {
		return this.getTypedRuleContexts(RelationshipTypeOptionalColonContext) as RelationshipTypeOptionalColonContext[];
	}
	public relationshipTypeOptionalColon(i: number): RelationshipTypeOptionalColonContext {
		return this.getTypedRuleContext(RelationshipTypeOptionalColonContext, i) as RelationshipTypeOptionalColonContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipTypes;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipTypes) {
	 		listener.enterRelationshipTypes(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipTypes) {
	 		listener.exitRelationshipTypes(this);
		}
	}
}


export class RelationshipTypeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relTypeName(): RelTypeNameContext {
		return this.getTypedRuleContext(RelTypeNameContext, 0) as RelTypeNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipType;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipType) {
	 		listener.enterRelationshipType(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipType) {
	 		listener.exitRelationshipType(this);
		}
	}
}


export class RelationshipTypeOptionalColonContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relTypeName(): RelTypeNameContext {
		return this.getTypedRuleContext(RelTypeNameContext, 0) as RelTypeNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipTypeOptionalColon;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipTypeOptionalColon) {
	 		listener.enterRelationshipTypeOptionalColon(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipTypeOptionalColon) {
	 		listener.exitRelationshipTypeOptionalColon(this);
		}
	}
}


export class NodeLabelsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nodeLabel_list(): NodeLabelContext[] {
		return this.getTypedRuleContexts(NodeLabelContext) as NodeLabelContext[];
	}
	public nodeLabel(i: number): NodeLabelContext {
		return this.getTypedRuleContext(NodeLabelContext, i) as NodeLabelContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodeLabels;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodeLabels) {
	 		listener.enterNodeLabels(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodeLabels) {
	 		listener.exitNodeLabels(this);
		}
	}
}


export class NodeLabelContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public labelName(): LabelNameContext {
		return this.getTypedRuleContext(LabelNameContext, 0) as LabelNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_nodeLabel;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNodeLabel) {
	 		listener.enterNodeLabel(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNodeLabel) {
	 		listener.exitNodeLabel(this);
		}
	}
}


export class RangeLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public integerLiteral_list(): IntegerLiteralContext[] {
		return this.getTypedRuleContexts(IntegerLiteralContext) as IntegerLiteralContext[];
	}
	public integerLiteral(i: number): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, i) as IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_rangeLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRangeLiteral) {
	 		listener.enterRangeLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRangeLiteral) {
	 		listener.exitRangeLiteral(this);
		}
	}
}


export class LabelNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_labelName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLabelName) {
	 		listener.enterLabelName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLabelName) {
	 		listener.exitLabelName(this);
		}
	}
}


export class RelTypeNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relTypeName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelTypeName) {
	 		listener.enterRelTypeName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelTypeName) {
	 		listener.exitRelTypeName(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public orExpression(): OrExpressionContext {
		return this.getTypedRuleContext(OrExpressionContext, 0) as OrExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_expression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class OrExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public xorExpression_list(): XorExpressionContext[] {
		return this.getTypedRuleContexts(XorExpressionContext) as XorExpressionContext[];
	}
	public xorExpression(i: number): XorExpressionContext {
		return this.getTypedRuleContext(XorExpressionContext, i) as XorExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(CypherParser.OR, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_orExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOrExpression) {
	 		listener.enterOrExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOrExpression) {
	 		listener.exitOrExpression(this);
		}
	}
}


export class XorExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andExpression_list(): AndExpressionContext[] {
		return this.getTypedRuleContexts(AndExpressionContext) as AndExpressionContext[];
	}
	public andExpression(i: number): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, i) as AndExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public XOR_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.XOR);
	}
	public XOR(i: number): TerminalNode {
		return this.getToken(CypherParser.XOR, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_xorExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterXorExpression) {
	 		listener.enterXorExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitXorExpression) {
	 		listener.exitXorExpression(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public notExpression_list(): NotExpressionContext[] {
		return this.getTypedRuleContexts(NotExpressionContext) as NotExpressionContext[];
	}
	public notExpression(i: number): NotExpressionContext {
		return this.getTypedRuleContext(NotExpressionContext, i) as NotExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(CypherParser.AND, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_andExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
}


export class NotExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public comparisonExpression(): ComparisonExpressionContext {
		return this.getTypedRuleContext(ComparisonExpressionContext, 0) as ComparisonExpressionContext;
	}
	public NOT_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.NOT);
	}
	public NOT(i: number): TerminalNode {
		return this.getToken(CypherParser.NOT, i);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_notExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNotExpression) {
	 		listener.enterNotExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNotExpression) {
	 		listener.exitNotExpression(this);
		}
	}
}


export class ComparisonExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addOrSubtractExpression(): AddOrSubtractExpressionContext {
		return this.getTypedRuleContext(AddOrSubtractExpressionContext, 0) as AddOrSubtractExpressionContext;
	}
	public partialComparisonExpression_list(): PartialComparisonExpressionContext[] {
		return this.getTypedRuleContexts(PartialComparisonExpressionContext) as PartialComparisonExpressionContext[];
	}
	public partialComparisonExpression(i: number): PartialComparisonExpressionContext {
		return this.getTypedRuleContext(PartialComparisonExpressionContext, i) as PartialComparisonExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_comparisonExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterComparisonExpression) {
	 		listener.enterComparisonExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitComparisonExpression) {
	 		listener.exitComparisonExpression(this);
		}
	}
}


export class AddOrSubtractExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplyDivideModuloExpression_list(): MultiplyDivideModuloExpressionContext[] {
		return this.getTypedRuleContexts(MultiplyDivideModuloExpressionContext) as MultiplyDivideModuloExpressionContext[];
	}
	public multiplyDivideModuloExpression(i: number): MultiplyDivideModuloExpressionContext {
		return this.getTypedRuleContext(MultiplyDivideModuloExpressionContext, i) as MultiplyDivideModuloExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_addOrSubtractExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAddOrSubtractExpression) {
	 		listener.enterAddOrSubtractExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAddOrSubtractExpression) {
	 		listener.exitAddOrSubtractExpression(this);
		}
	}
}


export class MultiplyDivideModuloExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public powerOfExpression_list(): PowerOfExpressionContext[] {
		return this.getTypedRuleContexts(PowerOfExpressionContext) as PowerOfExpressionContext[];
	}
	public powerOfExpression(i: number): PowerOfExpressionContext {
		return this.getTypedRuleContext(PowerOfExpressionContext, i) as PowerOfExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_multiplyDivideModuloExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMultiplyDivideModuloExpression) {
	 		listener.enterMultiplyDivideModuloExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMultiplyDivideModuloExpression) {
	 		listener.exitMultiplyDivideModuloExpression(this);
		}
	}
}


export class PowerOfExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryAddOrSubtractExpression_list(): UnaryAddOrSubtractExpressionContext[] {
		return this.getTypedRuleContexts(UnaryAddOrSubtractExpressionContext) as UnaryAddOrSubtractExpressionContext[];
	}
	public unaryAddOrSubtractExpression(i: number): UnaryAddOrSubtractExpressionContext {
		return this.getTypedRuleContext(UnaryAddOrSubtractExpressionContext, i) as UnaryAddOrSubtractExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_powerOfExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPowerOfExpression) {
	 		listener.enterPowerOfExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPowerOfExpression) {
	 		listener.exitPowerOfExpression(this);
		}
	}
}


export class UnaryAddOrSubtractExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stringListNullOperatorExpression(): StringListNullOperatorExpressionContext {
		return this.getTypedRuleContext(StringListNullOperatorExpressionContext, 0) as StringListNullOperatorExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_unaryAddOrSubtractExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterUnaryAddOrSubtractExpression) {
	 		listener.enterUnaryAddOrSubtractExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitUnaryAddOrSubtractExpression) {
	 		listener.exitUnaryAddOrSubtractExpression(this);
		}
	}
}


export class StringListNullOperatorExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyOrLabelsExpression_list(): PropertyOrLabelsExpressionContext[] {
		return this.getTypedRuleContexts(PropertyOrLabelsExpressionContext) as PropertyOrLabelsExpressionContext[];
	}
	public propertyOrLabelsExpression(i: number): PropertyOrLabelsExpressionContext {
		return this.getTypedRuleContext(PropertyOrLabelsExpressionContext, i) as PropertyOrLabelsExpressionContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IS_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.IS);
	}
	public IS(i: number): TerminalNode {
		return this.getToken(CypherParser.IS, i);
	}
	public NULL_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.NULL);
	}
	public NULL(i: number): TerminalNode {
		return this.getToken(CypherParser.NULL, i);
	}
	public NOT_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.NOT);
	}
	public NOT(i: number): TerminalNode {
		return this.getToken(CypherParser.NOT, i);
	}
	public IN_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.IN);
	}
	public IN(i: number): TerminalNode {
		return this.getToken(CypherParser.IN, i);
	}
	public STARTS_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.STARTS);
	}
	public STARTS(i: number): TerminalNode {
		return this.getToken(CypherParser.STARTS, i);
	}
	public WITH_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.WITH);
	}
	public WITH(i: number): TerminalNode {
		return this.getToken(CypherParser.WITH, i);
	}
	public ENDS_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.ENDS);
	}
	public ENDS(i: number): TerminalNode {
		return this.getToken(CypherParser.ENDS, i);
	}
	public CONTAINS_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.CONTAINS);
	}
	public CONTAINS(i: number): TerminalNode {
		return this.getToken(CypherParser.CONTAINS, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_stringListNullOperatorExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStringListNullOperatorExpression) {
	 		listener.enterStringListNullOperatorExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStringListNullOperatorExpression) {
	 		listener.exitStringListNullOperatorExpression(this);
		}
	}
}


export class PropertyOrLabelsExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public propertyLookup_list(): PropertyLookupContext[] {
		return this.getTypedRuleContexts(PropertyLookupContext) as PropertyLookupContext[];
	}
	public propertyLookup(i: number): PropertyLookupContext {
		return this.getTypedRuleContext(PropertyLookupContext, i) as PropertyLookupContext;
	}
	public nodeLabels_list(): NodeLabelsContext[] {
		return this.getTypedRuleContexts(NodeLabelsContext) as NodeLabelsContext[];
	}
	public nodeLabels(i: number): NodeLabelsContext {
		return this.getTypedRuleContext(NodeLabelsContext, i) as NodeLabelsContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyOrLabelsExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyOrLabelsExpression) {
	 		listener.enterPropertyOrLabelsExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyOrLabelsExpression) {
	 		listener.exitPropertyOrLabelsExpression(this);
		}
	}
}


export class FilterFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public filterFunctionName(): FilterFunctionNameContext {
		return this.getTypedRuleContext(FilterFunctionNameContext, 0) as FilterFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_filterFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFilterFunction) {
	 		listener.enterFilterFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFilterFunction) {
	 		listener.exitFilterFunction(this);
		}
	}
}


export class FilterFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTER(): TerminalNode {
		return this.getToken(CypherParser.FILTER, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_filterFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFilterFunctionName) {
	 		listener.enterFilterFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFilterFunctionName) {
	 		listener.exitFilterFunctionName(this);
		}
	}
}


export class ExistsFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public existsFunctionName(): ExistsFunctionNameContext {
		return this.getTypedRuleContext(ExistsFunctionNameContext, 0) as ExistsFunctionNameContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_existsFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExistsFunction) {
	 		listener.enterExistsFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExistsFunction) {
	 		listener.exitExistsFunction(this);
		}
	}
}


export class ExistsFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_existsFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExistsFunctionName) {
	 		listener.enterExistsFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExistsFunctionName) {
	 		listener.exitExistsFunctionName(this);
		}
	}
}


export class AllFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public allFunctionName(): AllFunctionNameContext {
		return this.getTypedRuleContext(AllFunctionNameContext, 0) as AllFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_allFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAllFunction) {
	 		listener.enterAllFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAllFunction) {
	 		listener.exitAllFunction(this);
		}
	}
}


export class AllFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_allFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAllFunctionName) {
	 		listener.enterAllFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAllFunctionName) {
	 		listener.exitAllFunctionName(this);
		}
	}
}


export class AnyFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public anyFunctionName(): AnyFunctionNameContext {
		return this.getTypedRuleContext(AnyFunctionNameContext, 0) as AnyFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_anyFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAnyFunction) {
	 		listener.enterAnyFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAnyFunction) {
	 		listener.exitAnyFunction(this);
		}
	}
}


export class AnyFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANY(): TerminalNode {
		return this.getToken(CypherParser.ANY, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_anyFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAnyFunctionName) {
	 		listener.enterAnyFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAnyFunctionName) {
	 		listener.exitAnyFunctionName(this);
		}
	}
}


export class NoneFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public noneFunctionName(): NoneFunctionNameContext {
		return this.getTypedRuleContext(NoneFunctionNameContext, 0) as NoneFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_noneFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNoneFunction) {
	 		listener.enterNoneFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNoneFunction) {
	 		listener.exitNoneFunction(this);
		}
	}
}


export class NoneFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NONE(): TerminalNode {
		return this.getToken(CypherParser.NONE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_noneFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNoneFunctionName) {
	 		listener.enterNoneFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNoneFunctionName) {
	 		listener.exitNoneFunctionName(this);
		}
	}
}


export class SingleFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleFunctionName(): SingleFunctionNameContext {
		return this.getTypedRuleContext(SingleFunctionNameContext, 0) as SingleFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_singleFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSingleFunction) {
	 		listener.enterSingleFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSingleFunction) {
	 		listener.exitSingleFunction(this);
		}
	}
}


export class SingleFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SINGLE(): TerminalNode {
		return this.getToken(CypherParser.SINGLE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_singleFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSingleFunctionName) {
	 		listener.enterSingleFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSingleFunctionName) {
	 		listener.exitSingleFunctionName(this);
		}
	}
}


export class ExtractFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public extractFunctionName(): ExtractFunctionNameContext {
		return this.getTypedRuleContext(ExtractFunctionNameContext, 0) as ExtractFunctionNameContext;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_extractFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExtractFunction) {
	 		listener.enterExtractFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExtractFunction) {
	 		listener.exitExtractFunction(this);
		}
	}
}


export class ExtractFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(CypherParser.EXTRACT, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_extractFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterExtractFunctionName) {
	 		listener.enterExtractFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitExtractFunctionName) {
	 		listener.exitExtractFunctionName(this);
		}
	}
}


export class ReduceFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public reduceFunctionName(): ReduceFunctionNameContext {
		return this.getTypedRuleContext(ReduceFunctionNameContext, 0) as ReduceFunctionNameContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public idInColl(): IdInCollContext {
		return this.getTypedRuleContext(IdInCollContext, 0) as IdInCollContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_reduceFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReduceFunction) {
	 		listener.enterReduceFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReduceFunction) {
	 		listener.exitReduceFunction(this);
		}
	}
}


export class ReduceFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REDUCE(): TerminalNode {
		return this.getToken(CypherParser.REDUCE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_reduceFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterReduceFunctionName) {
	 		listener.enterReduceFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitReduceFunctionName) {
	 		listener.exitReduceFunctionName(this);
		}
	}
}


export class ShortestPathPatternFunctionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shortestPathFunctionName(): ShortestPathFunctionNameContext {
		return this.getTypedRuleContext(ShortestPathFunctionNameContext, 0) as ShortestPathFunctionNameContext;
	}
	public patternElement(): PatternElementContext {
		return this.getTypedRuleContext(PatternElementContext, 0) as PatternElementContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public allShortestPathFunctionName(): AllShortestPathFunctionNameContext {
		return this.getTypedRuleContext(AllShortestPathFunctionNameContext, 0) as AllShortestPathFunctionNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_shortestPathPatternFunction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShortestPathPatternFunction) {
	 		listener.enterShortestPathPatternFunction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShortestPathPatternFunction) {
	 		listener.exitShortestPathPatternFunction(this);
		}
	}
}


export class ShortestPathFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHORTESTPATH(): TerminalNode {
		return this.getToken(CypherParser.SHORTESTPATH, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_shortestPathFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterShortestPathFunctionName) {
	 		listener.enterShortestPathFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitShortestPathFunctionName) {
	 		listener.exitShortestPathFunctionName(this);
		}
	}
}


export class AllShortestPathFunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALLSHORTESTPATHS(): TerminalNode {
		return this.getToken(CypherParser.ALLSHORTESTPATHS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_allShortestPathFunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAllShortestPathFunctionName) {
	 		listener.enterAllShortestPathFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAllShortestPathFunctionName) {
	 		listener.exitAllShortestPathFunctionName(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
	public caseExpression(): CaseExpressionContext {
		return this.getTypedRuleContext(CaseExpressionContext, 0) as CaseExpressionContext;
	}
	public COUNT(): TerminalNode {
		return this.getToken(CypherParser.COUNT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public listComprehension(): ListComprehensionContext {
		return this.getTypedRuleContext(ListComprehensionContext, 0) as ListComprehensionContext;
	}
	public patternComprehension(): PatternComprehensionContext {
		return this.getTypedRuleContext(PatternComprehensionContext, 0) as PatternComprehensionContext;
	}
	public filterFunction(): FilterFunctionContext {
		return this.getTypedRuleContext(FilterFunctionContext, 0) as FilterFunctionContext;
	}
	public extractFunction(): ExtractFunctionContext {
		return this.getTypedRuleContext(ExtractFunctionContext, 0) as ExtractFunctionContext;
	}
	public reduceFunction(): ReduceFunctionContext {
		return this.getTypedRuleContext(ReduceFunctionContext, 0) as ReduceFunctionContext;
	}
	public allFunction(): AllFunctionContext {
		return this.getTypedRuleContext(AllFunctionContext, 0) as AllFunctionContext;
	}
	public anyFunction(): AnyFunctionContext {
		return this.getTypedRuleContext(AnyFunctionContext, 0) as AnyFunctionContext;
	}
	public noneFunction(): NoneFunctionContext {
		return this.getTypedRuleContext(NoneFunctionContext, 0) as NoneFunctionContext;
	}
	public singleFunction(): SingleFunctionContext {
		return this.getTypedRuleContext(SingleFunctionContext, 0) as SingleFunctionContext;
	}
	public existsFunction(): ExistsFunctionContext {
		return this.getTypedRuleContext(ExistsFunctionContext, 0) as ExistsFunctionContext;
	}
	public shortestPathPatternFunction(): ShortestPathPatternFunctionContext {
		return this.getTypedRuleContext(ShortestPathPatternFunctionContext, 0) as ShortestPathPatternFunctionContext;
	}
	public relationshipsPattern(): RelationshipsPatternContext {
		return this.getTypedRuleContext(RelationshipsPatternContext, 0) as RelationshipsPatternContext;
	}
	public parenthesizedExpression(): ParenthesizedExpressionContext {
		return this.getTypedRuleContext(ParenthesizedExpressionContext, 0) as ParenthesizedExpressionContext;
	}
	public functionInvocation(): FunctionInvocationContext {
		return this.getTypedRuleContext(FunctionInvocationContext, 0) as FunctionInvocationContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_atom;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public numberLiteral(): NumberLiteralContext {
		return this.getTypedRuleContext(NumberLiteralContext, 0) as NumberLiteralContext;
	}
	public stringLiteral(): StringLiteralContext {
		return this.getTypedRuleContext(StringLiteralContext, 0) as StringLiteralContext;
	}
	public booleanLiteral(): BooleanLiteralContext {
		return this.getTypedRuleContext(BooleanLiteralContext, 0) as BooleanLiteralContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
	public mapLiteral(): MapLiteralContext {
		return this.getTypedRuleContext(MapLiteralContext, 0) as MapLiteralContext;
	}
	public listLiteral(): ListLiteralContext {
		return this.getTypedRuleContext(ListLiteralContext, 0) as ListLiteralContext;
	}
	public mapProjection(): MapProjectionContext {
		return this.getTypedRuleContext(MapProjectionContext, 0) as MapProjectionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_literal;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_stringLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(CypherParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(CypherParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_booleanLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
}


export class ListLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_listLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterListLiteral) {
	 		listener.enterListLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitListLiteral) {
	 		listener.exitListLiteral(this);
		}
	}
}


export class PartialComparisonExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addOrSubtractExpression(): AddOrSubtractExpressionContext {
		return this.getTypedRuleContext(AddOrSubtractExpressionContext, 0) as AddOrSubtractExpressionContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_partialComparisonExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPartialComparisonExpression) {
	 		listener.enterPartialComparisonExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPartialComparisonExpression) {
	 		listener.exitPartialComparisonExpression(this);
		}
	}
}


export class ParenthesizedExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_parenthesizedExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterParenthesizedExpression) {
	 		listener.enterParenthesizedExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitParenthesizedExpression) {
	 		listener.exitParenthesizedExpression(this);
		}
	}
}


export class RelationshipsPatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public nodePattern(): NodePatternContext {
		return this.getTypedRuleContext(NodePatternContext, 0) as NodePatternContext;
	}
	public patternElementChain_list(): PatternElementChainContext[] {
		return this.getTypedRuleContexts(PatternElementChainContext) as PatternElementChainContext[];
	}
	public patternElementChain(i: number): PatternElementChainContext {
		return this.getTypedRuleContext(PatternElementChainContext, i) as PatternElementChainContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_relationshipsPattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRelationshipsPattern) {
	 		listener.enterRelationshipsPattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRelationshipsPattern) {
	 		listener.exitRelationshipsPattern(this);
		}
	}
}


export class FilterExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public idInColl(): IdInCollContext {
		return this.getTypedRuleContext(IdInCollContext, 0) as IdInCollContext;
	}
	public where(): WhereContext {
		return this.getTypedRuleContext(WhereContext, 0) as WhereContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_filterExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFilterExpression) {
	 		listener.enterFilterExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFilterExpression) {
	 		listener.exitFilterExpression(this);
		}
	}
}


export class IdInCollContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_idInColl;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIdInColl) {
	 		listener.enterIdInColl(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIdInColl) {
	 		listener.exitIdInColl(this);
		}
	}
}


export class FunctionInvocationContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionInvocationBody(): FunctionInvocationBodyContext {
		return this.getTypedRuleContext(FunctionInvocationBodyContext, 0) as FunctionInvocationBodyContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_functionInvocation;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFunctionInvocation) {
	 		listener.enterFunctionInvocation(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFunctionInvocation) {
	 		listener.exitFunctionInvocation(this);
		}
	}
}


export class FunctionInvocationBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_functionInvocationBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFunctionInvocationBody) {
	 		listener.enterFunctionInvocationBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFunctionInvocationBody) {
	 		listener.exitFunctionInvocationBody(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UnescapedSymbolicName(): TerminalNode {
		return this.getToken(CypherParser.UnescapedSymbolicName, 0);
	}
	public EscapedSymbolicName(): TerminalNode {
		return this.getToken(CypherParser.EscapedSymbolicName, 0);
	}
	public COUNT(): TerminalNode {
		return this.getToken(CypherParser.COUNT, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_functionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitFunctionName) {
	 		listener.exitFunctionName(this);
		}
	}
}


export class ProcedureNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_procedureName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterProcedureName) {
	 		listener.enterProcedureName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitProcedureName) {
	 		listener.exitProcedureName(this);
		}
	}
}


export class ListComprehensionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public filterExpression(): FilterExpressionContext {
		return this.getTypedRuleContext(FilterExpressionContext, 0) as FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_listComprehension;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterListComprehension) {
	 		listener.enterListComprehension(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitListComprehension) {
	 		listener.exitListComprehension(this);
		}
	}
}


export class PatternComprehensionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationshipsPattern(): RelationshipsPatternContext {
		return this.getTypedRuleContext(RelationshipsPatternContext, 0) as RelationshipsPatternContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(CypherParser.WHERE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_patternComprehension;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPatternComprehension) {
	 		listener.enterPatternComprehension(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPatternComprehension) {
	 		listener.exitPatternComprehension(this);
		}
	}
}


export class PropertyLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyKeyName(): PropertyKeyNameContext {
		return this.getTypedRuleContext(PropertyKeyNameContext, 0) as PropertyKeyNameContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyLookup) {
	 		listener.enterPropertyLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyLookup) {
	 		listener.exitPropertyLookup(this);
		}
	}
}


export class CaseExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public END(): TerminalNode {
		return this.getToken(CypherParser.END, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(CypherParser.ELSE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public CASE(): TerminalNode {
		return this.getToken(CypherParser.CASE, 0);
	}
	public caseAlternatives_list(): CaseAlternativesContext[] {
		return this.getTypedRuleContexts(CaseAlternativesContext) as CaseAlternativesContext[];
	}
	public caseAlternatives(i: number): CaseAlternativesContext {
		return this.getTypedRuleContext(CaseAlternativesContext, i) as CaseAlternativesContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_caseExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCaseExpression) {
	 		listener.enterCaseExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCaseExpression) {
	 		listener.exitCaseExpression(this);
		}
	}
}


export class CaseAlternativesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(CypherParser.WHEN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(CypherParser.THEN, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_caseAlternatives;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterCaseAlternatives) {
	 		listener.enterCaseAlternatives(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitCaseAlternatives) {
	 		listener.exitCaseAlternatives(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_variable;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterVariable) {
	 		listener.enterVariable(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitVariable) {
	 		listener.exitVariable(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public doubleLiteral(): DoubleLiteralContext {
		return this.getTypedRuleContext(DoubleLiteralContext, 0) as DoubleLiteralContext;
	}
	public integerLiteral(): IntegerLiteralContext {
		return this.getTypedRuleContext(IntegerLiteralContext, 0) as IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_numberLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNumberLiteral) {
	 		listener.enterNumberLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNumberLiteral) {
	 		listener.exitNumberLiteral(this);
		}
	}
}


export class MapLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public literalEntry_list(): LiteralEntryContext[] {
		return this.getTypedRuleContexts(LiteralEntryContext) as LiteralEntryContext[];
	}
	public literalEntry(i: number): LiteralEntryContext {
		return this.getTypedRuleContext(LiteralEntryContext, i) as LiteralEntryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mapLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMapLiteral) {
	 		listener.enterMapLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMapLiteral) {
	 		listener.exitMapLiteral(this);
		}
	}
}


export class MapProjectionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public mapProjectionVariants_list(): MapProjectionVariantsContext[] {
		return this.getTypedRuleContexts(MapProjectionVariantsContext) as MapProjectionVariantsContext[];
	}
	public mapProjectionVariants(i: number): MapProjectionVariantsContext {
		return this.getTypedRuleContext(MapProjectionVariantsContext, i) as MapProjectionVariantsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mapProjection;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMapProjection) {
	 		listener.enterMapProjection(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMapProjection) {
	 		listener.exitMapProjection(this);
		}
	}
}


export class MapProjectionVariantsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literalEntry(): LiteralEntryContext {
		return this.getTypedRuleContext(LiteralEntryContext, 0) as LiteralEntryContext;
	}
	public propertySelector(): PropertySelectorContext {
		return this.getTypedRuleContext(PropertySelectorContext, 0) as PropertySelectorContext;
	}
	public variableSelector(): VariableSelectorContext {
		return this.getTypedRuleContext(VariableSelectorContext, 0) as VariableSelectorContext;
	}
	public allPropertiesSelector(): AllPropertiesSelectorContext {
		return this.getTypedRuleContext(AllPropertiesSelectorContext, 0) as AllPropertiesSelectorContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_mapProjectionVariants;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterMapProjectionVariants) {
	 		listener.enterMapProjectionVariants(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitMapProjectionVariants) {
	 		listener.exitMapProjectionVariants(this);
		}
	}
}


export class LiteralEntryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyKeyName(): PropertyKeyNameContext {
		return this.getTypedRuleContext(PropertyKeyNameContext, 0) as PropertyKeyNameContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_literalEntry;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLiteralEntry) {
	 		listener.enterLiteralEntry(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLiteralEntry) {
	 		listener.exitLiteralEntry(this);
		}
	}
}


export class PropertySelectorContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertySelector;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertySelector) {
	 		listener.enterPropertySelector(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertySelector) {
	 		listener.exitPropertySelector(this);
		}
	}
}


export class VariableSelectorContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_variableSelector;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterVariableSelector) {
	 		listener.enterVariableSelector(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitVariableSelector) {
	 		listener.exitVariableSelector(this);
		}
	}
}


export class AllPropertiesSelectorContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_allPropertiesSelector;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterAllPropertiesSelector) {
	 		listener.enterAllPropertiesSelector(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitAllPropertiesSelector) {
	 		listener.exitAllPropertiesSelector(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public legacyParameter(): LegacyParameterContext {
		return this.getTypedRuleContext(LegacyParameterContext, 0) as LegacyParameterContext;
	}
	public newParameter(): NewParameterContext {
		return this.getTypedRuleContext(NewParameterContext, 0) as NewParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_parameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
}


export class LegacyParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterName(): ParameterNameContext {
		return this.getTypedRuleContext(ParameterNameContext, 0) as ParameterNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_legacyParameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLegacyParameter) {
	 		listener.enterLegacyParameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLegacyParameter) {
	 		listener.exitLegacyParameter(this);
		}
	}
}


export class NewParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterName(): ParameterNameContext {
		return this.getTypedRuleContext(ParameterNameContext, 0) as ParameterNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_newParameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNewParameter) {
	 		listener.enterNewParameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNewParameter) {
	 		listener.exitNewParameter(this);
		}
	}
}


export class ParameterNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
	public DecimalInteger(): TerminalNode {
		return this.getToken(CypherParser.DecimalInteger, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_parameterName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterParameterName) {
	 		listener.enterParameterName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitParameterName) {
	 		listener.exitParameterName(this);
		}
	}
}


export class PropertyExpressionsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyExpression_list(): PropertyExpressionContext[] {
		return this.getTypedRuleContexts(PropertyExpressionContext) as PropertyExpressionContext[];
	}
	public propertyExpression(i: number): PropertyExpressionContext {
		return this.getTypedRuleContext(PropertyExpressionContext, i) as PropertyExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyExpressions;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyExpressions) {
	 		listener.enterPropertyExpressions(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyExpressions) {
	 		listener.exitPropertyExpressions(this);
		}
	}
}


export class PropertyExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public propertyLookup_list(): PropertyLookupContext[] {
		return this.getTypedRuleContexts(PropertyLookupContext) as PropertyLookupContext[];
	}
	public propertyLookup(i: number): PropertyLookupContext {
		return this.getTypedRuleContext(PropertyLookupContext, i) as PropertyLookupContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyExpression) {
	 		listener.enterPropertyExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyExpression) {
	 		listener.exitPropertyExpression(this);
		}
	}
}


export class PropertyKeysContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyKeyName_list(): PropertyKeyNameContext[] {
		return this.getTypedRuleContexts(PropertyKeyNameContext) as PropertyKeyNameContext[];
	}
	public propertyKeyName(i: number): PropertyKeyNameContext {
		return this.getTypedRuleContext(PropertyKeyNameContext, i) as PropertyKeyNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyKeys;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyKeys) {
	 		listener.enterPropertyKeys(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyKeys) {
	 		listener.exitPropertyKeys(this);
		}
	}
}


export class PropertyKeyNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName(): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, 0) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_propertyKeyName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterPropertyKeyName) {
	 		listener.enterPropertyKeyName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitPropertyKeyName) {
	 		listener.exitPropertyKeyName(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HexInteger(): TerminalNode {
		return this.getToken(CypherParser.HexInteger, 0);
	}
	public OctalInteger(): TerminalNode {
		return this.getToken(CypherParser.OctalInteger, 0);
	}
	public DecimalInteger(): TerminalNode {
		return this.getToken(CypherParser.DecimalInteger, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_integerLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
}


export class DoubleLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ExponentDecimalReal(): TerminalNode {
		return this.getToken(CypherParser.ExponentDecimalReal, 0);
	}
	public RegularDecimalReal(): TerminalNode {
		return this.getToken(CypherParser.RegularDecimalReal, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_doubleLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDoubleLiteral) {
	 		listener.enterDoubleLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDoubleLiteral) {
	 		listener.exitDoubleLiteral(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbolicName_list(): SymbolicNameContext[] {
		return this.getTypedRuleContexts(SymbolicNameContext) as SymbolicNameContext[];
	}
	public symbolicName(i: number): SymbolicNameContext {
		return this.getTypedRuleContext(SymbolicNameContext, i) as SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_namespace;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterNamespace) {
	 		listener.enterNamespace(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitNamespace) {
	 		listener.exitNamespace(this);
		}
	}
}


export class LeftArrowHeadContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_leftArrowHead;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterLeftArrowHead) {
	 		listener.enterLeftArrowHead(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitLeftArrowHead) {
	 		listener.exitLeftArrowHead(this);
		}
	}
}


export class RightArrowHeadContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_rightArrowHead;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterRightArrowHead) {
	 		listener.enterRightArrowHead(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitRightArrowHead) {
	 		listener.exitRightArrowHead(this);
		}
	}
}


export class DashContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_dash;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterDash) {
	 		listener.enterDash(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitDash) {
	 		listener.exitDash(this);
		}
	}
}


export class SymbolicNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
	public UnescapedSymbolicName(): TerminalNode {
		return this.getToken(CypherParser.UnescapedSymbolicName, 0);
	}
	public EscapedSymbolicName(): TerminalNode {
		return this.getToken(CypherParser.EscapedSymbolicName, 0);
	}
	public HexLetter(): TerminalNode {
		return this.getToken(CypherParser.HexLetter, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_symbolicName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterSymbolicName) {
	 		listener.enterSymbolicName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitSymbolicName) {
	 		listener.exitSymbolicName(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CYPHER(): TerminalNode {
		return this.getToken(CypherParser.CYPHER, 0);
	}
	public EXPLAIN(): TerminalNode {
		return this.getToken(CypherParser.EXPLAIN, 0);
	}
	public PROFILE(): TerminalNode {
		return this.getToken(CypherParser.PROFILE, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(CypherParser.USING, 0);
	}
	public PERIODIC(): TerminalNode {
		return this.getToken(CypherParser.PERIODIC, 0);
	}
	public COMMIT(): TerminalNode {
		return this.getToken(CypherParser.COMMIT, 0);
	}
	public UNION(): TerminalNode {
		return this.getToken(CypherParser.UNION, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(CypherParser.INDEX, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public ASSERT(): TerminalNode {
		return this.getToken(CypherParser.ASSERT, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(CypherParser.IS, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(CypherParser.UNIQUE, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public LOAD(): TerminalNode {
		return this.getToken(CypherParser.LOAD, 0);
	}
	public CSV(): TerminalNode {
		return this.getToken(CypherParser.CSV, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public HEADERS(): TerminalNode {
		return this.getToken(CypherParser.HEADERS, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(CypherParser.FROM, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public FIELDTERMINATOR(): TerminalNode {
		return this.getToken(CypherParser.FIELDTERMINATOR, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(CypherParser.OPTIONAL, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public UNWIND(): TerminalNode {
		return this.getToken(CypherParser.UNWIND, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(CypherParser.MERGE, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public DETACH(): TerminalNode {
		return this.getToken(CypherParser.DETACH, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(CypherParser.DELETE, 0);
	}
	public REMOVE(): TerminalNode {
		return this.getToken(CypherParser.REMOVE, 0);
	}
	public FOREACH(): TerminalNode {
		return this.getToken(CypherParser.FOREACH, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(CypherParser.RETURN, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(CypherParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(CypherParser.BY, 0);
	}
	public L_SKIP(): TerminalNode {
		return this.getToken(CypherParser.L_SKIP, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(CypherParser.LIMIT, 0);
	}
	public ASCENDING(): TerminalNode {
		return this.getToken(CypherParser.ASCENDING, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(CypherParser.ASC, 0);
	}
	public DESCENDING(): TerminalNode {
		return this.getToken(CypherParser.DESCENDING, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(CypherParser.DESC, 0);
	}
	public JOIN(): TerminalNode {
		return this.getToken(CypherParser.JOIN, 0);
	}
	public SCAN(): TerminalNode {
		return this.getToken(CypherParser.SCAN, 0);
	}
	public START(): TerminalNode {
		return this.getToken(CypherParser.START, 0);
	}
	public NODE(): TerminalNode {
		return this.getToken(CypherParser.NODE, 0);
	}
	public RELATIONSHIP(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIP, 0);
	}
	public REL(): TerminalNode {
		return this.getToken(CypherParser.REL, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(CypherParser.WHERE, 0);
	}
	public SHORTESTPATH(): TerminalNode {
		return this.getToken(CypherParser.SHORTESTPATH, 0);
	}
	public ALLSHORTESTPATHS(): TerminalNode {
		return this.getToken(CypherParser.ALLSHORTESTPATHS, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(CypherParser.OR, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(CypherParser.XOR, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(CypherParser.AND, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(CypherParser.NOT, 0);
	}
	public STARTS(): TerminalNode {
		return this.getToken(CypherParser.STARTS, 0);
	}
	public ENDS(): TerminalNode {
		return this.getToken(CypherParser.ENDS, 0);
	}
	public CONTAINS(): TerminalNode {
		return this.getToken(CypherParser.CONTAINS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
	public COUNT(): TerminalNode {
		return this.getToken(CypherParser.COUNT, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(CypherParser.FILTER, 0);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(CypherParser.EXTRACT, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(CypherParser.ANY, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(CypherParser.NONE, 0);
	}
	public SINGLE(): TerminalNode {
		return this.getToken(CypherParser.SINGLE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(CypherParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(CypherParser.FALSE, 0);
	}
	public REDUCE(): TerminalNode {
		return this.getToken(CypherParser.REDUCE, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(CypherParser.CASE, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(CypherParser.ELSE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(CypherParser.END, 0);
	}
	public WHEN(): TerminalNode {
		return this.getToken(CypherParser.WHEN, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(CypherParser.THEN, 0);
	}
	public CALL(): TerminalNode {
		return this.getToken(CypherParser.CALL, 0);
	}
	public YIELD(): TerminalNode {
		return this.getToken(CypherParser.YIELD, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(CypherParser.KEY, 0);
	}
	public CATALOG(): TerminalNode {
		return this.getToken(CypherParser.CATALOG, 0);
	}
	public SHOW(): TerminalNode {
		return this.getToken(CypherParser.SHOW, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(CypherParser.DEFAULT, 0);
	}
	public DBMS(): TerminalNode {
		return this.getToken(CypherParser.DBMS, 0);
	}
	public DATABASE(): TerminalNode {
		return this.getToken(CypherParser.DATABASE, 0);
	}
	public DATABASES(): TerminalNode {
		return this.getToken(CypherParser.DATABASES, 0);
	}
	public GRAPH(): TerminalNode {
		return this.getToken(CypherParser.GRAPH, 0);
	}
	public GRAPHS(): TerminalNode {
		return this.getToken(CypherParser.GRAPHS, 0);
	}
	public REPLACE(): TerminalNode {
		return this.getToken(CypherParser.REPLACE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(CypherParser.IF, 0);
	}
	public STOP(): TerminalNode {
		return this.getToken(CypherParser.STOP, 0);
	}
	public ROLE(): TerminalNode {
		return this.getToken(CypherParser.ROLE, 0);
	}
	public ROLES(): TerminalNode {
		return this.getToken(CypherParser.ROLES, 0);
	}
	public USER(): TerminalNode {
		return this.getToken(CypherParser.USER, 0);
	}
	public USERS(): TerminalNode {
		return this.getToken(CypherParser.USERS, 0);
	}
	public POPULATED(): TerminalNode {
		return this.getToken(CypherParser.POPULATED, 0);
	}
	public PASSWORD(): TerminalNode {
		return this.getToken(CypherParser.PASSWORD, 0);
	}
	public CHANGE(): TerminalNode {
		return this.getToken(CypherParser.CHANGE, 0);
	}
	public REQUIRED(): TerminalNode {
		return this.getToken(CypherParser.REQUIRED, 0);
	}
	public STATUS(): TerminalNode {
		return this.getToken(CypherParser.STATUS, 0);
	}
	public ACTIVE(): TerminalNode {
		return this.getToken(CypherParser.ACTIVE, 0);
	}
	public SUSPENDED(): TerminalNode {
		return this.getToken(CypherParser.SUSPENDED, 0);
	}
	public ALTER(): TerminalNode {
		return this.getToken(CypherParser.ALTER, 0);
	}
	public CURRENT(): TerminalNode {
		return this.getToken(CypherParser.CURRENT, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(CypherParser.TO, 0);
	}
	public PRIVILEGES(): TerminalNode {
		return this.getToken(CypherParser.PRIVILEGES, 0);
	}
	public GRANT(): TerminalNode {
		return this.getToken(CypherParser.GRANT, 0);
	}
	public DENY(): TerminalNode {
		return this.getToken(CypherParser.DENY, 0);
	}
	public REVOKE(): TerminalNode {
		return this.getToken(CypherParser.REVOKE, 0);
	}
	public RELATIONSHIPS(): TerminalNode {
		return this.getToken(CypherParser.RELATIONSHIPS, 0);
	}
	public NODES(): TerminalNode {
		return this.getToken(CypherParser.NODES, 0);
	}
	public ELEMENT(): TerminalNode {
		return this.getToken(CypherParser.ELEMENT, 0);
	}
	public ELEMENTS(): TerminalNode {
		return this.getToken(CypherParser.ELEMENTS, 0);
	}
	public COPY(): TerminalNode {
		return this.getToken(CypherParser.COPY, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(CypherParser.OF, 0);
	}
	public TRAVERSE(): TerminalNode {
		return this.getToken(CypherParser.TRAVERSE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(CypherParser.READ, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(CypherParser.WRITE, 0);
	}
	public ACCESS(): TerminalNode {
		return this.getToken(CypherParser.ACCESS, 0);
	}
	public INDEXES(): TerminalNode {
		return this.getToken(CypherParser.INDEXES, 0);
	}
	public MANAGEMENT(): TerminalNode {
		return this.getToken(CypherParser.MANAGEMENT, 0);
	}
	public NEW(): TerminalNode {
		return this.getToken(CypherParser.NEW, 0);
	}
	public LABEL(): TerminalNode {
		return this.getToken(CypherParser.LABEL, 0);
	}
	public LABELS(): TerminalNode {
		return this.getToken(CypherParser.LABELS, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(CypherParser.NAME, 0);
	}
	public NAMES(): TerminalNode {
		return this.getToken(CypherParser.NAMES, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(CypherParser.TYPE, 0);
	}
	public TYPES(): TerminalNode {
		return this.getToken(CypherParser.TYPES, 0);
	}
	public PROPERTY(): TerminalNode {
		return this.getToken(CypherParser.PROPERTY, 0);
	}
	public CONSTRAINTS(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINTS, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(CypherParser.ASSIGN, 0);
	}
	public BTREE(): TerminalNode {
		return this.getToken(CypherParser.BTREE, 0);
	}
	public EXIST(): TerminalNode {
		return this.getToken(CypherParser.EXIST, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(CypherParser.FOR, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(CypherParser.OPTIONS, 0);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(CypherParser.EXECUTE, 0);
	}
	public DEFINED(): TerminalNode {
		return this.getToken(CypherParser.DEFINED, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(CypherParser.FUNCTION, 0);
	}
	public FUNCTIONS(): TerminalNode {
		return this.getToken(CypherParser.FUNCTIONS, 0);
	}
	public BOOSTED(): TerminalNode {
		return this.getToken(CypherParser.BOOSTED, 0);
	}
	public PROCEDURE(): TerminalNode {
		return this.getToken(CypherParser.PROCEDURE, 0);
	}
	public PROCEDURES(): TerminalNode {
		return this.getToken(CypherParser.PROCEDURES, 0);
	}
	public ADMIN(): TerminalNode {
		return this.getToken(CypherParser.ADMIN, 0);
	}
	public ADMINISTRATOR(): TerminalNode {
		return this.getToken(CypherParser.ADMINISTRATOR, 0);
	}
	public BRIEF(): TerminalNode {
		return this.getToken(CypherParser.BRIEF, 0);
	}
	public VERBOSE(): TerminalNode {
		return this.getToken(CypherParser.VERBOSE, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(CypherParser.OUTPUT, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_keyword;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}
