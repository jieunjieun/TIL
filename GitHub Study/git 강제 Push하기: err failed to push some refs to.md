# git 강제 Push하기/ err failed to push some refs to

```
error: failed to push some refs to 'git 주소'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

이런식으로 push과정에서 에러가 생김.

### 강제로 push 진행하기

- 임시방편으로 + 기호를 사용하여 해결이 가능하다

  ```
  기존 명령: $ git push -u origin master
  강제 명령: $ git push -u origin +master
  ```

  강제 명령을 사용하면 push가 잘 돌아간다.