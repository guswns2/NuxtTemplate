# Git

## Git이란?

버전 관리 시스템(Version Control System). 코드 변경 이력을 관리하고 협업을 도와주는 도구

모든 변경 이력이 자동으로 기록됨

깔끔한 파일 하나로 관리

이전 버전으로 쉽게 복구

## 저장소

### Working Directory, Staging Area, Repository

Working Directory: 실제로 작업하는 폴더

Staging Area: 커밋할 파일을 준비하는 공간. 논리적으로 관련된 변경사항만 묶어서 커밋 가능

Repository: 변경 이력이 영구적으로 저장되는 공간. .git 폴더에 저장됨

### 로컬 vs 원격

Git은 분산 버전 관리 시스템으로, 두 가지 저장 공간 사용

#### 로컬(Local)

내 컴퓨터에 있는 Git 저장소

구성 요소: Working Directory, Staging Area, Repository(.git)

#### 원격(Remote)

온라인 서버에 있는 Git 저장소(GitHub, GitLab, Bitbucket 등)

### 기본 작업

```bash
git config --global user.name '<이름>'    # 사용자 이름 설정
git config --global user.email '<이메일>'    # 사용자 이메일 설정
git init    # 새로운 Git 저장소 초기화
git clone <URL>    # 원격 저장소를 복제하여 로컬에 생성
git commit -m "msg"    # 스테이징 영역의 변경사항을 로컬 저장소에 기록
```

## 브랜치 관리

### 브랜치 생성, 확인, 전환, 삭제

```bash
git branch feature/new-feature    # 새 브랜치 생성

git branch        # 로컬 브랜치 목록
git branch -a     # 원격 브랜치 포함 전체 목록

git checkout feature/new-feature    # 브랜치 전환(기존)
git switch feature/new-feature    # 브랜치 전환(새로운)

git branch -d feature/old-feature   # 병합된 브랜치 삭제
```

<!-- ### 브랜치 복원

```bash
git commit -m "A"
git commit -m "B"
git commit -m "C"  # 현재 위치

# restore를 쓰면
git restore --source=HEAD~2 file.txt
# → 커밋 A의 file.txt 내용을 "복사"해서 작업 디렉토리에 붙여넣기
# → 커밋 히스토리는 그대로 (B, C 커밋은 그대로 존재)
# → 새로 커밋하면 D 커밋이 생김
``` -->

### 브랜치 전략

Git Flow: main(운영 배포), develop(개발 통합), featrue(새 기능), release(배포 준비), hotfix(긴급 버그)

GitHub Flow: main(항상 배포 가능한 상태), feature(모든 작업용)

## 버전 관리

```bash
git commit --amend    # 직전 커밋을 수정하거나 덮어씀
# git revert <commit-hash>    # 특정 커밋을 되돌리는 새로운 커밋 생성
# git reset <commit-hash>    # 특정 커밋 지점으로 돌아감. 옵션에 따라 변경 내용 유지 또는 삭제
```

## 원격 저장소 관리

```bash
git remote add origin <URL>    # 원격 저장소 연결
git push origin <branch>    # 로컬의 커밋을 원격 저장소에 업로드
git pull origin <branch>    # 원격 저장소의 변경사항을 현재 브랜치에 병합
```

pull: 원격 저장소의 최신 코드를 로컬로 가져와 자동으로 병합. 실제로는 fetch로 원격 저장소 변경사항을 가져온 후 merge로 현재 브랜치에 병합

merge: 로컬 저장소 내에서 한 브랜치의 변경사항을 다른 브랜치에 통합

### sub1 브랜치에서 내용 변경 후 sub2 브랜치로 체크아웃 후 커밋 및 푸시 하면 sub2 브랜치로 푸시 가능

### restore rollback rebase reset revert stash

## VSCode - GitHub 연동

GitHub 레퍼지토리 생성

<br>

VSCode

Ctrl + Shift + P > Git: Add Remote..

원격 이름 origin

main branch 개시 > 커밋 및 푸시

## Branch 게시

sub branch 게시

## Issue, Pull Request Template 생성

.github/ISSUE_TEMPLATE/bug_report.md, feature_request.md

.github/pull-request_template.md

## Merge, Rebase
