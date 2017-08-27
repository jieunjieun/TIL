# OracleDB 로그인

- SCOTT, HR 계정 비밀번호 까먹었다거나 잠겨있을 경우
  - `sqlplus system/암호` <- sys 혹은 system 계정으로 로그인
  - `alter user scott account unlock;`
  - 락 풀림
  - `show user`
  - `connect scott/암호`
  - `show user`
- DBA 권한 갖는 SYS, SYSTEM 계정 비밀번호 생각 안날때
  - `sqlplus/nolog`
  - `conn/as sysdba`
  - `alter user system identified by 암호`
  - `alter user sys identified by 암호`
- SCOTT/HR 비밀번호 생각 안날때
  - `sqlplus sys/암호 as sysdba`
  - `alter user scott identified by 암호`
  - `alter user hr identified by 암호`