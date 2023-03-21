package testing1;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.RepetitionInfo;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestReporter;

@DisplayName("when running MathUtils")
@TestInstance(TestInstance.Lifecycle.PER_METHOD)
class MathUtilsTest {
	
	MathUtils mathUtils;
	TestInfo testInfo;
	TestReporter testReporter;
	@BeforeEach
	void intit(TestInfo testInfo,TestReporter testReporter) {
		mathUtils = new MathUtils();
		this.testInfo = testInfo;
		this.testReporter = testReporter;
	}
	
	@AfterEach
	void cleanup() {
		System.out.println("cleaning up....");
	}
	
	@BeforeAll
	static void beforeAllInit() {
		System.out.println("before all");
	}
	
	@Test
	@DisplayName("add method")
	void testAdd() {
		int expected = 2;
		int actual = mathUtils.add(1, 1);
		assertEquals(expected, actual,() -> "this method adds two numbers");
	}
	
	@Nested
	@Tag("Math")
	class AddTest{
		@Test
		@DisplayName("when adding two positive numbers")
		void testAdd() {
			
			int expected = 2;
			int actual = mathUtils.add(1, 1);
			assertEquals(expected, actual,"should return the right sum");
		}
		
		@Test
		@DisplayName("testing add method for negative")
		void testAddNegative() {
			
			assertEquals(2, mathUtils.add(3, -1),"should return the right sum");
		}
		
		@RepeatedTest(2)
		@DisplayName("testing add method for negative")
		void testAddNegativeRepeate(RepetitionInfo repetitionInfo) {
			repetitionInfo.getCurrentRepetition();
			assertEquals(2, mathUtils.add(3, -1),"should return the right sum");
		}
	}
	@Tag("Math")
	@Test
	@DisplayName("test multiply")
	void testMultipley() {
		
//		assertEquals(10, mathUtils.multiply(5, 2));
		assertAll(
				()->assertEquals(2, mathUtils.multiply(1, 2)),
				()->assertEquals(0, mathUtils.multiply(0, 2)),
				()->assertEquals(-2, mathUtils.multiply(-1, 2))
				
				
				);
	}
	
	@Test
	@Tag("Math")
	void testDivide() {
		
		assertThrows(ArithmeticException.class, ()->mathUtils.divide(1, 0),"divid by 0 throws!");
	}
	
	@Test
	@Tag("Circle")
	void testComputeCircleArea() {
		
		assertEquals(314.1592653589793, mathUtils.computeCircleArea(10));
	}
	@Test
	@Disabled
	@DisplayName("TDO method, should not run")
	void disavle() {
		fail("this is in progress");
	}
}

/*
 * disable
 *conditional execution
 * assume
 * 
 * */
