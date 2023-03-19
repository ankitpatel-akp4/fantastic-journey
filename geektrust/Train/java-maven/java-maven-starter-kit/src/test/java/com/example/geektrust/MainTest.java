package com.example.geektrust;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.jupiter.api.*;


public class MainTest {
	
	@Test
	@DisplayName("Main method for input1")
	void testMainInput1() throws Exception {
		ByteArrayOutputStream outContent = new ByteArrayOutputStream();
	    System.setOut(new PrintStream(outContent));
	    String[] args = {"./sample_input/input1.txt"};
	    Main.main(args);
	    String expectedOutput = "ARRIVAL TRAIN_A ENGINE NDL NDL GHY NJP NGP\n"
	    		+ "ARRIVAL TRAIN_B ENGINE NJP GHY AGA BPL PTA\n"
	    		+ "DEPARTURE TRAIN_AB ENGINE ENGINE GHY GHY NJP NJP PTA NDL NDL AGA BPL NGP\n";
	    assertEquals(expectedOutput, outContent.toString(),()->"should print the right output");
	}
	@Test
	@DisplayName("Main method for input2")
	void testMainInput2() throws Exception {
		ByteArrayOutputStream outContent = new ByteArrayOutputStream();
		System.setOut(new PrintStream(outContent));
		String[] args = {"./sample_input/input2.txt"};
		Main.main(args);
		String expectedOutput = "ARRIVAL TRAIN_A ENGINE HYB NGP ITJ\n"
				+ "ARRIVAL TRAIN_B ENGINE NJP PTA\n"
				+ "DEPARTURE TRAIN_AB ENGINE ENGINE NJP PTA ITJ NGP\n";
		assertEquals(expectedOutput, outContent.toString(),()->"should print the right output");
	}
	
}
/*
 * 
 ans input 1
 
ARRIVAL TRAIN_A ENGINE NDL NDL GHY NJP NGP
ARRIVAL TRAIN_B ENGINE NJP GHY AGA BPL PTA
DEPARTURE TRAIN_AB ENGINE ENGINE GHY GHY NJP NJP PTA NDL NDL AGA BPL NGP
 
 
 
ans input 2

ARRIVAL TRAIN_A ENGINE HYB NGP ITJ
ARRIVAL TRAIN_B ENGINE NJP PTA
DEPARTURE TRAIN_AB ENGINE ENGINE NJP PTA ITJ NGP
 
 */