# Java - 처음부터 훑어보기

### getter setter 예제

```Java
public class DataForm {
	private String user;
	int korea;
	int eng;
	int math;
	
	DataForm(String user, int korea, int eng, int math){
		this.user = user;
		this.korea = korea;
		this.eng = eng;
		this.math = math;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public int getKorea() {
		return korea;
	}

	public void setKorea(int korea) {
		this.korea = korea;
	}

	public int getEng() {
		return eng;
	}

	public void setEng(int eng) {
		this.eng = eng;
	}

	public int getMath() {
		return math;
	}

	public void setMath(int math) {
		this.math = math;
	}
	
	
}
```

```java
public class ScoreManage {
	public static void main(String[] args) {
		int sum_kor = 0;
		int sum_eng = 0;
		int sum_math = 0;
		int total = 0;
		double[] person = new double[4];
		
		DataForm[] pdata = new DataForm[4];
		pdata[0] = new DataForm("Ava",10,20,60);
		pdata[1] = new DataForm("Bobby", 80,50,30);
		pdata[2] = new DataForm("Carry", 80,30, 19);
		pdata[3] = new DataForm("Denny", 90,70,89);
		
		int lng = pdata.length;
		
		for(int i = 0; i< lng; i++){
			System.out.println("개인 점수 공개:");
			System.out.println("이름 : " + pdata[i].getUser() );
			System.out.println(pdata[i].getUser()+"의 국어점수 :"+ pdata[i].getKorea()+
					" \n수학 점수: "+pdata[i].getMath() + "\n영어 점수: " + pdata[i].getEng());
			System.out.println("-----------");
			
		}
		for(int j = 0; j< lng; j++){
			sum_kor += pdata[j].korea;
			sum_eng += pdata[j].eng;
			sum_math += pdata[j].math;
			total = sum_kor + sum_eng + sum_math;
			
		}
		System.out.println("과목 총점");
		System.out.println("국어 총점 :" + sum_kor + "국어 평균:" + sum_kor/lng);
		System.out.println("수학 총점 :" + sum_math +"수학 평균: " + sum_math/lng);
		System.out.println("영어 총점 : " + sum_eng + "영어 평균 : " +sum_eng/lng);
		System.out.println("total : " + total);
		System.out.println("average : " +total/lng);
		
	}
}
```

## 상속 예제

```java
package extendsEx;

public class ExtendsEx {
	public static void main(String[] args) {
		Child ch = new Child();
		System.out.println(ch.age);
		ch.play();
	}

}
class Parent{
	int age = 7;
}
class Child extends Parent{
	void play(){
		System.out.println("Hi i am "+ age + "years old!");
	}
}
```

### 오버라이딩 예제

```
package OverridingEx;
class point{
	int x;
	int y;
	
	String getLocation(){
		return "x :" + x+ "Y :" + y;
	}
	
}

public class Point3D extends point {
	int z;
	
	String getLocation(){
		return "x: " + x + "Y :" + y + "z: "+ z;
		
	}

}
```

