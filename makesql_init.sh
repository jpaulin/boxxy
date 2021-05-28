#!/bin/bash

# 
# 
#

sqlscriptfile=bookdbinit.sql

# Configurations of SQL structure that will be created
# These drive the SQL writing echo -statements in this script
dbname=bookbase
collationScheme=utf8_general_ci

#
# Creating a .sql file (a script that creates SQL structure, once it is fed to 'mysql')
#
# Remove, and ensure creation of a null file
rm -rf 
touch ${sqlscriptfile}

if [! -f ${sqlscriptfile} ]; then
  echo "Error: Could not create .sql initialization file"
  exit 1
fi

# We fail test purposefully, to test the next if statement
echo "Failtest" >> ${sqlscriptfile}

# Ensure the file is also zero length, ie. null (no content yet)
if [! -s ]; then
  echo "Error: .sql initialization file was not empty after creation!"
  echo "Expected to have file of zero size named:"
  echo "${sqlscriptfile}"
  exit 1
fi

# Lisää rivi, joka luo tietokannan
echo "create database $dbname collate ${collationScheme};" >> ${sqlscriptfile}

# Otetaan käsittelyyn juuri luotu tietokanta
echo "use bookbase;" >> ${sqlscriptfile}

# Luodaan taulun rakenne, kirjojen datalle. 
# 2 kenttää: 
# title  => kirjan nimi
# author => tekijän nimi 
echo "create table books ( id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, title varchar(255), author varchar(255));" >> ${sqlscriptfile}

# Datan syöttö 1 kirja lisää
# 'default' kenttä arvo tulee aina automaattisen id:n eli taulun indeksin kohdalle
# 1. parametri on "title" (kirjan nimi)
# 2. parametri on "author" (tekijä)
# insert into books values (default, "", "");
# insert into books values (default, "", "");
# insert into books values (default, "", "");

echo "Done. Now you have SQL init script called:"
echo "${sqlscriptfile}"
echo "Do NOT attempt to run the script from shell."
echo "Instead, feed the script to mysql"
