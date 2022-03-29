const db=require('./db')

var conn=db.init(); //db setting

console.log(db.connect(conn)) //db status checking

conn.query('insert into tost (id,pw) values(?,?)',["root","root"],(err,raw)=>{ //insert value
    console.log(raw)
})

conn.query('delete from tost where id=?',["root"],(err,res)=>{ //delete records
    console.log(res)
})

conn.query('update tost SET id=?, pw=? where id=?',["allo","ha","alla"],(err,raw)=>{ //update value
    console.log(raw)
})

conn.end();

//보통 table은 미리 만들어두고 값을 insert 함