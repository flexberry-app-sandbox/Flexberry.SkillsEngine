docker build --no-cache -f SQL\Dockerfile.PostgreSql -t skillsengine/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t skillsengine/app ../..
