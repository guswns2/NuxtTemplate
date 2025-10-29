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

## 기본 작업

```bash
# 설정
git config (--global) user.name '<이름>'    # 사용자 이름 설정(--global: 모든 프로젝트에 적용)
git config (--global) user.email '<이메일>'    # 사용자 이메일 설정
git config --list   # 설정 확인
git config user.name

# 프로젝트 생성
git init (project-name)    # 현재 디렉토리를 Git 저장소로 초기화(새 폴더 만들면서 초기화)
git clone <URL>    # 원격 저장소를 복제하여 로컬에 생성
```

## 브랜치 관리

```bash
# 생성
git branch feature/new-feature

# 목록 확인
git branch

# 전환
git checkout feature/new-feature
git switch feature/new-feature

# 삭제
git branch -d feature/old-feature
```

### 브랜치 전략

Git Flow: main(운영 배포), develop(개발 통합), featrue(새 기능), release(배포 준비), hotfix(긴급 버그)

GitHub Flow: main(항상 배포 가능한 상태), feature(모든 작업용)

## 버전 관리

```bash
git commit -m "msg"    # 스테이징 영역의 변경사항을 로컬 레퍼지토리에 기록

git merge feature/login    # feature 브랜치를 현재 브랜치에 병합
git reset    # merge 되돌리기
git revert <commit-hash>    # 특정 커밋을 되돌리는 새로운 커밋 생성
git rebase main    # 현재 브랜치를 main 위에 재배치
```

## 원격 저장소 관리

```bash
git remote add origin <URL>    # 원격 저장소 연결
git push origin <branch>    # 로컬의 커밋을 원격 저장소에 업로드
git pull origin <branch>    # 원격 저장소의 변경사항을 현재 브랜치에 병합
```

### pull, merge

pull: 원격 저장소의 최신 코드를 로컬로 가져와 자동으로 병합. 실제로는 fetch로 원격 저장소 변경사항을 가져온 후 merge로 현재 브랜치에 병합

merge: 로컬 저장소 내에서 한 브랜치의 변경사항을 다른 브랜치에 통합

### sub1 브랜치에서 내용 변경 후 sub2 브랜치로 체크아웃 후 커밋 및 푸시 하면 sub2 브랜치로 푸시 가능

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
