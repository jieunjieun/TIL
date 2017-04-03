# SwiftStudy - 170403

## 지도 만들때 필요한 이상한 함수들

```swift
func goLocation(latitude latitudeValue: CLLocationDegrees, longitude longitudeValue : CLLocationDegrees, delta span :Double)-> CLLocationCoordinate2D {
        let pLocation = CLLocationCoordinate2DMake(latitudeValue, longitudeValue)
        let spanValue = MKCoordinateSpanMake(span, span)
        let pRegion = MKCoordinateRegionMake(pLocation, spanValue)
        myMap.setRegion(pRegion, animated: true)
        return pLocation
    }

```

CLLocationCoordinate2DMake == WGS 84를 사용하는 지리학적인 구조물(?)이다. 그래서 위도와 경도값을 받아서 2D로 보여준다.
MKCoordinateSpanMake == 지도의 '영역'을 정의함 
MKCoordinateRegionMake == 지도의 어떤 부분을 사용자에게 보여줄지 정의함
setRegion == 2D로 만든것이 담겨있는 pLocation이란 변수를 받아 지역을 설정한다.



### 요약

위도와 경도값을 매개변수로 해서 CLLocationCoordinate2DMake 함수를 호출하고, 리턴값을 pLocation으로 받는다. 그리고 범위값을 매개변수로 해서 MKCoordinateSpanMake함수를 호출하고 리턴값은 spanValue 로 받는다. 그리고 나서 받은 pLocation과 spanValue값을 매개변수로 해서 MKCoordinateRegionMake함수를 호출하고 pRegion을 리턴 받는다. 그리고  pRegion을 매개변수로 해서 myMap.setRegion함수를 호출한다.



## 핀 설치 하기

```swift
func setAnnotation(latitude latitudeValue: CLLocationDegrees, 
longitude longitudeValue : CLLocationDegrees, delta span :Double, 
title strTitle: String, subtitle strSubtitle:String) {
        let annotation = MKPointAnnotation()
        annotation.coordinate = goLocation(latitude: latitudeValue, 
        longitude: longitudeValue, delta: span)
    }
```

MKPointAnnotation() == 정확한 장소를 사실적인 내용으로 주석을 달아 표시함. 자신이 지멋대로 혼자 알아서 지 생각대로 주석을 다는것보다는 꽤 낫다고 함 
 let annotation밑에 -> annotation의 coordinate값을 goLocation함수로부터 CLLocationCoordinate2D형태로 받아야 하는데 그럴려면 goLocation함수를 수정해야함



## 위치 설정

```swift
if 세그먼트가 0이든 1이든 뭐든이면{
setAnnotation(latitude: 위도값, longitude: 경도값, delta: 확대값, title:"제목",
subtitle:"주소")
}
```



### 현재 위치 설정하기

```Swift
if 세그먼트 어쩌구저쩌구{
self.세그먼트번호.text = ""    //일단 공백으로 둠
locationManager.startUpdatingLocation() //locationManager불러서 업데이트 시킴
}
```

