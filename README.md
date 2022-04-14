# HW1 Readme.md

## Members:
- Mark Bussard
- Trai Pham
- Michael Melkonyan

## Link to website 
[Website](https://brain-not-found.site/)

## Details of Github auto deploy Setup
We followed the instructions provided for auto-deployment using Github. 
We first clone the repository we've created for the website use the --bare flag, 
which will give us version control information. We made the hook, and made it executable.
Then from our local machinewe added the remote repository for the server. 
From there we can push to that remote repository and the changes will
be reflected on our live site. 


## Summary of Changes to HTML file in DevTools after Compression
There were spacing and empty lines within the HTML, in which the compression 
eliminated those extra implementations. Extra tabs were also 
removed/clean as part of the compression. The size of our main page was 0.4KB. 
Both CSS and HTML file was compressed using gzip


## Summary of removing 'server' header
Installed the package `libapache2-mod-security2` <br> <br>
Added `security2` module to `/etc/apache2/apache.conf`: <br>
```
<IfModule security2_module>
    SecRuleEngine on
    ServerTokens Min
    SecServerSignature "CSE135 Server"
</IfModule> 
```
