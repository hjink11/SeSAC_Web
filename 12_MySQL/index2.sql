SHOW TABLES;
CREATE TABLE customer (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

DESC customer;

INSERT INTO customer VALUES('aaa', '손흥민', '1992-03-17');
INSERT INTO customer VALUES('bbb', '황희찬', '1997-11-01');
INSERT INTO customer VALUES('ccc', '이강인', '2001-05-31');
INSERT INTO customer VALUES('ddd', '조현우', '1992-03-17');

SELECT * FROM customer;

--외래키 테이블
--ON UPDATE CASCADE  : 기준테이블의 데이터가 변경되면(update) 참조 테이블의 데이터도 변경(회원테이블 변경되면 구매 테이블도 변경)
--ON DELETE CASCADE  : 기준테이블의 데이터가 삭제(delete)되면 참조 테이블의 데이터도 삭제
CREATE TABLE orderlist(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);
-- 테이블 삭제시에는 구매테이블(orderlist) (외래키가 있는 테이블) (1) 먼저 삭제
--- 회원테이블(customer) 참조되는 기본키가 있는 테이블) (2) 나중에 삭제

DESC orderlist;

INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES('aaa', '맥북',1);
INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES('bbb', '빅파이',31);
INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES('ccc', '키보드',3);
INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES('bbb', '초코파이',5);
INSERT INTO orderlist (customer_id, product_name, quantity) 
VALUES('ccc', '귀여운 텀블러',2);

--####################
-- JOIN

--INNER JOIN 
-- 1 INNER JOIN 과 ON 사용
SELECT * 
FROM customer 
 INNER JOIN orderlist 
 ON customer.id = orderlist.customer_id;

-- 2 WHERE 로 INNER JOIN 사용 
SELECT * 
FROM customer, orderlist
WHERE customer.id = orderlist.customer_id;

-- 3 INNER JOIN 과 ON 사용, where 조건 추가
SELECT * 
FROM customer 
 INNER JOIN orderlist 
 ON customer.id = orderlist.customer_id
WHERE quantity >=5;

-- 2 WHERE 로 INNER JOIN 사용 조회조건 추가 and
SELECT * 
FROM customer, orderlist
WHERE customer.id = orderlist.customer_id; AND quantity >=5;

-- 5 특정 컬럼 조회 
SELECT orderlist.id, customer.id, customer.name,
orderlist.product_name, orderlist.quantity
FROM orderlist, customer
WHERE customer_id = orderlist.customer_id;

--6 테이블에 별칭 지어서 접근 (as)
SELECT c.id, o.customer_id, c.name, o.product_name, o.quantity
FROM customer as c, orderlist as o
WHERE c.id = o.customer_id;

--********** let outer join, right outer join
SELECT *
FROM orderlist LEFT OUTER JOIN customer
ON orderlist.customer_id=customer.id;

SELECT *
FROM orderlist RIGHT OUTER JOIN customer
ON orderlist.customer_id=customer.id;

-- naturla join
-- 아래는 같은 이름의 컬럼이 없어서 아무것도 나오지 않는다. 
SELECT * 
FROM orderlist NATURAL JOIN customer;


-- DCL 
DESC mysql.user;

SELECT * FROM mysql.user;

CREATE USER 'user2'@'localhost' IDENTIFIED BY '4321';  -- 유저 만들고 비번 만들고 위에 select로 확인

SHOW GRANTS;
SHOW GRANTS FOR 'user2'@'localhost'; -- 권한 없음

DROP USER 'user2'@'localhost';  -- 삭제 

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password
by '1111';     -- 비밀번호 변경하는 것  (바꾸고 싶을 때 )


