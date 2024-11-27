show DATABASES;
CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
run 안누르면 실행 x
utf8_general_c =일반적인 언어 및 문자만을 지원하며, 몇몇 특수한 언어나 문자의 정렬이 올바르게 이루어지지 않을 수 있습니다.
utf8mb4_sunicode_ci = 유니코드 기반으로 모든 언어 및 문자를 지원하는 규칙이며, 문자의 일관성과 정확성을 보장합니다

*/

--데이터베이스 사용 선언
USE sesac;

--테이블 목록 확인 (use 해야함)
SHOW TABLES;

--데이버베이스 삭제
DROP DATABASE mydatabase;

##########################테이블 관련 명령어#######

/*
CREATE TABLE 테이블 이름(
  속성이름 1 데이터타입 제약조건,
  속성이름2 데이터타임 제약조건,
);
--제약 조건 
-- NOT NULL :null 허용 x
-- AUTO_INCREMENT : 자동 숫자 증가 
-- PRIMARY KEY :기본키 설정 (중복허용 x, null 허용 x)
-- DEFAULT : 기본값 설정 
-- UINIQUE : 중복 헝용 x, null 허용 x, 한 테이블에 여러개 설정 가능 
*/

 CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
 );

-- 테이블 목록 확인 
 SHOW TABLES;

--테이블 구조 확인 
 DESC products;

 -- 삭제 
 DROP TABLE products;

 --테이즐 속성 수정 DDL
--속성 추가
ALTER TABLE products ADD new_column VARCHAR(20);

--속성 변경 
ALTER TABLE products MODIFY new_column INT;

--속성 수정
ALTER TABLE products DROP new_column;


####### DML
-- 데이터 조작어 
-- 데이터 CRUD를 위해 사용하는 SQL 문 

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- create >> insert into   + id는 알아서 숫자가 늘어나기 떄문에 생략
INSERT INTO user (name, age, address) VALUES ('김민정', 21, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('오소리', 34, '서울특별시 동작구');
INSERT INTO user (name, age, address) VALUES ('이민정', 33, '서울특별시 도봉구');
INSERT INTO user (name, age, address) VALUES ('김민재', 26, '서울특별시 강북구');
INSERT INTO user (name, age, address) VALUES ('박수정', 27, '서울특별시 서초구');
INSERT INTO user (name, age, address) VALUES ('이해리', 24, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이형석', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('김성민', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('박수진', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('권순모', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('진현정', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

--raed >> SELECT [컬럼이름] FROM [테이블 이름] (WHERE)

-- 전체 데이터 조회 *
SELECT * FROM user;

-- 특정 컬럼 조회 
SELECT name FROM user;

--특정 컬럼 조회 (여러 속성)
SELECT age, name FROM user;

--where 절로 특정 컬럼 (전체 속성 다 가져오기*)
SELECT * FROM user WHERE age >=25;  -- ~이상
SELECT * FROM user WHERE id = 3; -- 일치 비교 

SELECT id, age FROM user WHERE name = "권순모";

SELECT * FROM user WHERE address LIKE "서울%"; -- LIKE 패턴 사용 (서울로 시작하는)
SELECT * FROM user WHERE name LIKE"__희"; -- 00희 라는 이름
SELECT * FROM user WHERE name LIKE "_희_";   -- 0희0라는 이름 

SELECT * FROM user WHERE address LIKE "%광역시%"; 

-- IN(list) list 범위인 데이터 가져오기 
SELECT * FROM user WHERE age IN(20,21,22,23);
-- beteween a and b (a와 b는 포함)
SELECT * FROM user WHERE age BETWEEN 25 AND 30;

INSERT INTO user(name, age) VALUES('서현승', 28);  --null 값 추가

--IS NOT NULL 주소가 null값인 사람 조회 / 아닌 사람 조회
SELECT * FROM user WHERE address IS NULL;
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리 연산자
-- 주소가 널이 아니면서 나이가 25초과인 전체 속성 and
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;


-- 이씨이고 나이가 23인 사람 and
SELECT * FROM user WHERE name LIKE '이%' AND age=23;


--서울에 살거나 김씨인 사람  or
SELECT * FROM user WHERE address LIKE '서울%' OR name LIKE '김%';


-- LIMIT , ORDER BY, DISTINCT
SELECT * FROM user ORDER BY age desc; -- 내림차수
SELECT * FROM user WHERE id > 6 ORDER BY age ASC;  -- 오름차순

--distinct
SELECT age FROM user ORDER BY age ASC;
SELECT DISTINCT age FROM user ORDER BY age ASC;

--서울시에 사는 사람 이름과 주소 불러오는데 2개만
SELECT name, address FROM user WHERE address LIKE "서울%" LIMIT 2;

-- order를 먼저 쓰고 limit
SELECT name, address FROM user WHERE address LIKE "서울%" ORDER BY name ASC LIMIT 3;

