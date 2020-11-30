#include<bits/stdc++.h>
using namespace std;
int main()
{
	string line="nikita is good girl";
	stringstream check1(line);
	string intermediate;
	
	vector<string>tokens;
	while(getline(check1,intermediate,' '))
	{
	
		tokens.push_back(intermediate);
	
	} 
	
	for(int i=0;i<tokens.size();i++)
	{
		cout<<tokens[i]<<'\n';
	}















}
