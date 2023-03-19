package com.example.geektrust.models;

import java.util.ArrayList;
import java.util.List;

public class Train{
	
	private String name;
	private List<String> routes = new ArrayList<>();
	
	public Train(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getRoutes() {
		return routes;
	}
	public void setRoutes(List<String> routes) {
		this.routes = routes;
	}

}
