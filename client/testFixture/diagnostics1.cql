WITH $dict.rows as rows UNWIND rows as row
MERGE (p:Patient {id:row.PATIENT})
MERGE (d:Drug {code:row.CODE})
SET d.description=row.DESCRIPTION
MERGE (ps:Encounter {id,:row.ENCOUNTER, isEnd: false})
ON CREATE
  SET ps.code=row.CODE, ps.date=datetime(row.START)
ON MATCH
  SET ps.code=row.CODE
MERGE (p)-[:HAS_ENCOUNTER]->(ps)
MERGE (ps)-[:HAS_DRUG]->(d)
WITH p,d,ps,row
WHERE row.STOP IS NOT NULL and row.STOP <> ''
CREATE (pe:Encounter {id:row.ENCOUNTER, date:datetime(row.STOP)})
SET pe.code=row.CODE, pe.isEnd=true
MERGE (p)-[:HAS_ENCOUNTER]->(pe)
MERGE (pe)-[:HAS_DRUG]->(d)
MERGE (ps)-[:HAS_END]->(pe)