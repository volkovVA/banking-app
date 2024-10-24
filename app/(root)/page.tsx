import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
	const loggedIn= {
		firstName: 'Slava',
		lastName: 'Volkov',
		email: 'volkov.slava@email.com'
	}

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						subtext="Access and manage your account and transactions efficiently"
						user={loggedIn?.firstName || 'Guest'}
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