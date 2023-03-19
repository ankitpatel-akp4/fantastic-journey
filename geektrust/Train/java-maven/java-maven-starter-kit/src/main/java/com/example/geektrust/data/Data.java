package com.example.geektrust.data;

import java.util.HashMap;
import java.util.Map;

public class Data {
	Map<String,Integer> trainARoutesLookup = new HashMap<>();
	Map<String,Integer> trainBRoutesLookup = new HashMap<>();
	
	
	void setTrainARoute() {
		
		trainARoutesLookup.put("HYB", 1200);
		trainARoutesLookup.put("SLM",350);
		trainARoutesLookup.put("KRN", 900);
		trainARoutesLookup.put("NGP", 1600);
		trainARoutesLookup.put("NDL",2700 );
		trainARoutesLookup.put("CHN", 0);
		trainARoutesLookup.put("BLR",550 );
		trainARoutesLookup.put("AGA", 2500);
		trainARoutesLookup.put("ITJ", 1900);
		trainARoutesLookup.put("BPL", 2000);
		
	}
	public Map<String, Integer> getTrainARoute() {
		setTrainARoute();
		return trainARoutesLookup;
		
	}
	void setTrainBRoute() {
		
		trainBRoutesLookup.put("TVC",0);
		trainBRoutesLookup.put("HYB",2000 );
		trainBRoutesLookup.put("SRR", 300);
		trainBRoutesLookup.put("NJP",4200 );
		trainBRoutesLookup.put("PNE", 1400);
		trainBRoutesLookup.put("NGP", 2400);
		trainBRoutesLookup.put("GHY",4700 );
		trainBRoutesLookup.put("MAO", 1000);
		trainBRoutesLookup.put("MAQ", 600);
		trainBRoutesLookup.put("PTA",3800 );
		trainBRoutesLookup.put("ITJ",2700 );
		trainBRoutesLookup.put("BPL", 2800);
		
	}
	public Map<String, Integer> getTrainBRoute() {
		setTrainBRoute();
		return trainBRoutesLookup;
	}
	
	
	
	
}
