# PHP - crypt함수

crypt() 함수는 단방향 알고리즘을 사용하여 문자열을 암호화 한다. 이 함수는 단방향 알고리즘이기 때문에 

암호화된 문자열을 다시 원문으로 되돌리는 복호화 알고리즘이 존재하지 않다.



crypt() 함수는 4가지의 암호화 방식을 지원한다.



1. CRYPT_STD_DES : 2문자 salt를 가지는 표준 DES 기반 암호화 <- 앞에서 8글자만 암호화
2. CRYPT_EXT_DES : 9문자 salt를 가지는 확장 DES 기반 암호화
3. CRYPT_MD5: $1$로 시작하는 12문자 salt를 가지는 MD5 암호화
4. CRYPT_BLOWFISH: $2$로 시작하는 16문자 salt를 가지는 Blowfish암호화



salt로 암호화 방식을 선택할 수 있다.(salt는 예를들어 암호+비밀문자와 같이 다른사람이 모르게하는 수단(?)이다.) 지정하지 않는 경우 자동으로 선택된다고 한다. 여기서 암호화 알고리즘은 시스템이 지원하지 않으면 사용할 수 없다. 그래서 예를 들어 확장 DES 알고리즘을 지원하는지 알고 싶으면 CRYPT_EXT_DES값이 1인지 확인해보면 된다.

```
<?php 
	$original_string = "helloworld";
	$salt = "$1$itissaltt"; //암호화 하기위한 salt
	$user_input = "byeworld";  //userinput이  original_string과 다름 고로
                               //비밀번호 다르다고 나옴

	if(CRYPT_MD5 == 1){
		$crypt_string = crypt($original_string, $salt);

		if($crypt_string == crypt($user_input, $salt)){
			echo "비밀번호가 일치합니다.";
		}else{
			echo "비밀번호가 일치하지 않습니다.";
		}
	}
	else{
		echo "MD5 암호화 알고리즘을 지원하지 않습니다.";
	}
	
 ?>
```

