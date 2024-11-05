import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const Home = async () => {
	const loggedIn = await getLoggedInUser();

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						subtext="Access and manage your account and transactions efficiently"
						user={loggedIn?.name || 'Guest'}
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={2500}
					/>
				</header>

				RECENT TRANSACTIONS
			</div>

			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[
					{ currentBalance: 123.50 },
					{ currentBalance: 456.70 }
				]}
			/>
		</section>
	)
}

export default Home