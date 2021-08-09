// @Author: WilliamJiangy
#include <bits/stdc++.h>
using namespace std;
using ll = long long;
using ull = unsigned long long;
 
#define testcase() {int t; cin >> t; while(t--) {solve();}}
#define all(x) (x).begin(), (x).end()
#define sz(x) ((int)(x).size())
#define pb push_back
#define ar array
#define bug() cout << "######PLEASE_NO_BUG######\n"

const int nxM = 107;
int dp[nxM], s[3];

void solve() {
	cin >> s[0] >> s[1] >> s[2];
	for(int i = 1; i <= s[0]; i++) {
		for(int j = 1; j <= s[1]; j++) {
			for(int k = 1; k <= s[2]; k++) {
				dp[i + j + k]++;
			}
		}
	}
	int k = *max_element(dp, dp + 100);
	for(int i = 1; i <= 100; i++) {
		if(dp[i] == k) {
			cout << i << "\n";
			break;
		}
	}
}
 
int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	solve();
	return 0;
}
