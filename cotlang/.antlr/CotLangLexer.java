// Generated from /Users/guoqikai/Desktop/Code-Colab/cotlang/cotlang.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CotLangLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		IF=1, FOR=2, WHILE=3, EXPECT=4, TRACE=5, ID=6, WS=7, TAB=8, NEWLINE=9;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LOWERCASE", "UPPERCASE", "IF", "FOR", "WHILE", "EXPECT", "TRACE", "ID", 
			"WS", "TAB", "NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'if'", "'for'", "'while'", "'expect'", "'trace'", null, "' '", 
			"'\t'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IF", "FOR", "WHILE", "EXPECT", "TRACE", "ID", "WS", "TAB", "NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CotLangLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "cotlang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\13R\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t"+
		"\3\t\5\t;\n\t\3\t\3\t\3\t\3\t\7\tA\n\t\f\t\16\tD\13\t\3\n\3\n\3\13\3\13"+
		"\3\f\5\fK\n\f\3\f\3\f\6\fO\n\f\r\f\16\fP\2\2\r\3\2\5\2\7\3\t\4\13\5\r"+
		"\6\17\7\21\b\23\t\25\n\27\13\3\2\4\3\2c|\3\2C\\\2X\2\7\3\2\2\2\2\t\3\2"+
		"\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2"+
		"\25\3\2\2\2\2\27\3\2\2\2\3\31\3\2\2\2\5\33\3\2\2\2\7\35\3\2\2\2\t \3\2"+
		"\2\2\13$\3\2\2\2\r*\3\2\2\2\17\61\3\2\2\2\21:\3\2\2\2\23E\3\2\2\2\25G"+
		"\3\2\2\2\27N\3\2\2\2\31\32\t\2\2\2\32\4\3\2\2\2\33\34\t\3\2\2\34\6\3\2"+
		"\2\2\35\36\7k\2\2\36\37\7h\2\2\37\b\3\2\2\2 !\7h\2\2!\"\7q\2\2\"#\7t\2"+
		"\2#\n\3\2\2\2$%\7y\2\2%&\7j\2\2&\'\7k\2\2\'(\7n\2\2()\7g\2\2)\f\3\2\2"+
		"\2*+\7g\2\2+,\7z\2\2,-\7r\2\2-.\7g\2\2./\7e\2\2/\60\7v\2\2\60\16\3\2\2"+
		"\2\61\62\7v\2\2\62\63\7t\2\2\63\64\7c\2\2\64\65\7e\2\2\65\66\7g\2\2\66"+
		"\20\3\2\2\2\67;\5\3\2\28;\5\5\3\29;\7a\2\2:\67\3\2\2\2:8\3\2\2\2:9\3\2"+
		"\2\2;B\3\2\2\2<A\5\3\2\2=A\5\5\3\2>A\7a\2\2?A\3\2\2\2@<\3\2\2\2@=\3\2"+
		"\2\2@>\3\2\2\2@?\3\2\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2C\22\3\2\2\2DB\3"+
		"\2\2\2EF\7\"\2\2F\24\3\2\2\2GH\7\13\2\2H\26\3\2\2\2IK\7\17\2\2JI\3\2\2"+
		"\2JK\3\2\2\2KL\3\2\2\2LO\7\f\2\2MO\7\17\2\2NJ\3\2\2\2NM\3\2\2\2OP\3\2"+
		"\2\2PN\3\2\2\2PQ\3\2\2\2Q\30\3\2\2\2\t\2:@BJNP\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}