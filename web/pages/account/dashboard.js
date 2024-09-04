// import Overview from '@/components/Sections/overview';
// import BarChart from '@/components/Chart/barChart';
// import AllOrders from '@/components/Sections/allOrders';
// import AllSubscriptions from '@/components/Sections/allSubscriptions';
// import Balance from '@/components/Items/cardBalance';
// import QuickOrder from '@/components/Items/cardQuickOrder';
// import Recents from '@/components/Items/cardRecents';
import TabMenu from '@/components/Navigation/tabMenu';
import Profile from '@/components/Sections/profile';
import { useState, useEffect } from "react";
// import useSWR from 'swr';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
// import { getCenter } from "@/utils/getCenter";
// import { lookUp } from 'geojson-places';

export default function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("recent");
    const [hasSortBeenSelected, setHasSortBeenSelected] = useState(false);
    // const [isSearchOpen, setIsSearchOpen] = useState(false);
    // const { data: financeData, error: financeError, isLoading: financeisLoading } = useSWR('userData', fetcher);
    // const [ wbData, setWbData ] = useState([]);
    // const [subscriptions, setAllSubscriptions] = useState([])
    const { user, error: userError, isLoading: userIsLoading } = useUser();
    // const [wbLoading, setLoading] = useState(true);
    // const [success, setSuccess] = useState(false);
    // const [lastScrollY, setLastScrollY] = useState(0);
    // const [scrollingDown, setIsScrollingDown] = useState(false);
    // const labelsSet = new Set();
    // const activeCounts = {};
    // const inactiveCounts = {};
    // const [labels, setLabels] = useState([]);
    // const [active, setActive] = useState([]);
    // const [inactive, setInactive] = useState([]);
    const [activeTab, setActiveTab] = useState('Profile');
    const [tabs, setTabs] = useState(['Profile', 'Dashboard', 'Orders']);

    // useEffect(() => {
    //     const handleScroll = () => {
    //     if (window.scrollY > lastScrollY) {
    //         setIsSearchOpen(false);
    //     } else {
    //         setIsScrollingDown(true);
    //     }
    //     setLastScrollY(window.scrollY);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [lastScrollY]);

    // useEffect(() => {
    //     let updatedTabs = ['Dashboard', 'Orders', 'Profile'];
    //     if(financeData && parseFloat(financeData["FLOW"]) > 0.00){
    //         updatedTabs.splice(2, 0, 'Subscriptions');
    //         setTabs(updatedTabs);
    //     }

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`/api/orders`);
    //             const subs = await fetch('/api/subscriptions/view?product=FLOW');
    //             const my_subscriptions = await subs.json();
    //             const updatedSubscriptions = JSON.parse(my_subscriptions.subscriptions).map(subscription => {
    //                 // Format the points
    //                 const formattedPoints = subscription.points.map(point => ({
    //                   lat: point[0],
    //                   lng: point[1]
    //                 }));
                  
    //                 // Calculate the center of the points
    //                 const center = getCenter(formattedPoints);
    //                 // console.log(center.lat);
                  
    //                 // Determine the region based on the center
    //                 const region = lookUp(center.lat, center.lng);
    //                 // Return the updated subscription object
    //                 return {
    //                   ...subscription,
    //                   points: formattedPoints,
    //                   center: center,
    //                   prod: my_subscriptions.product,
    //                   status: "ACTIVE",
    //                   region: region ? region.continent_code : 'OC'
    //                 };
    //             });
                  
    //             setAllSubscriptions(updatedSubscriptions);

    //             if (response.ok) {
    //                 const result = await response.json();
    //                 setWbData(result);
    //                 if(labels.length !== 0 || active.length !== 0 || inactive.length !== 0){
    //                     setSuccess(true);
    //                 }

    //                 const labelsSet = new Set();
    //                 const activeCounts = {};
    //                 const inactiveCounts = {};

    //                 const dataArray = Object.values(result);

    //                 dataArray.forEach(item => {
    //                     labelsSet.add(item.region);
    //                     if (item.status === 'ACTIVE') {
    //                         activeCounts[item.region] = (activeCounts[item.region] || 0) + 1;
    //                         inactiveCounts[item.region] = inactiveCounts[item.region] || 0;
    //                     } else if (item.status === 'INACTIVE') {
    //                         inactiveCounts[item.region] = (inactiveCounts[item.region] || 0) + 1;
    //                         activeCounts[item.region] = activeCounts[item.region] || 0;
    //                     }
    //                 });

    //                 setLabels(Array.from(labelsSet));
    //                 setActive(Object.values(activeCounts));
    //                 setInactive(Object.values(inactiveCounts));
    //             } else {
    //                 console.error('Error fetching data:', response.status);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         } finally {
    //             setLoading(false); // Mark data as loaded
    //         }
    //     };

    //     if (user) {
    //         fetchData();
    //     }
    // }, [user, active.length, inactive.length, labels.length, financeData]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setHasSortBeenSelected(true);
    };

    const handleSearchChange = (e) => {
        window.scrollTo(0, 0)
        setSearchQuery(e.target.value);
    };

    // const toggleSearch = () => {
    //     setIsSearchOpen(!isSearchOpen);
    // };
    console.log(user)
    return (
        <div>
            <div className="sticky -top-1 bg-black p-5 z-10 h-32">
                <div className="flex flex-row items-center">
                    <div className="mt-4 ">
                        <div className="flex justify-between">
                            <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
                            {/* {(activeTab === "Orders" || activeTab === "Subscriptions") && (
                                <div className="flex mr-auto pr-6">
                                    <select
                                        className="ml-3 border border-gray-300 rounded-md p-2 text-black bg-white shadow-sm focus:outline-none focus:ring-2 hidden md:block"
                                        value={sortOption}
                                        onChange={handleSortChange}
                                        >
                                        <option value="recent">{hasSortBeenSelected ? "Recent" : "Sort By..."}</option>
                                        <option value="prod">Product</option>
                                        <option value="region">Region</option>
                                        <option value="start">Start Date</option>
                                        <option value="end">Stop Date</option>
                                        <option value="status">Status</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="ml-3 border border-gray-300 rounded-md p-2 w-64 hidden md:block text-black"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
                {/* {activeTab === "Orders" && (
                    <div className="mt-2 bg-black text-black w-100 block md:hidden">
                        <div className="flex-1 mt-2 bg-black">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="mt-2 mr-2 border border-gray-300 rounded-md p-2 w-full mb-8"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                )} */}
            </div>
            <div className='p-5 mb-6 mt-8'>
                {/* {activeTab === "Dashboard" && (
                    <div>
                        <Overview active={active.reduce((acc, curr) => acc + curr, 0)} inactive={inactive.reduce((acc, curr) => acc + curr, 0)} next={active.reduce((acc, curr) => acc + curr, 0)} loading={wbLoading} />
                        <BarChart labels={labels} active={active} inactive={inactive} loading={wbLoading} />
                        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-3`}>
                            <Balance finances={financeData} loading={financeisLoading} />
                            <QuickOrder finances={financeData} loading={financeisLoading} />
                            <Recents watchboxes={Object.keys(wbData).map((id) => ({id,...wbData[id],}))} loading={wbLoading} />
                        </div>
                    </div>
                )}
                {activeTab === "Orders" && (
                    <AllOrders watchboxes={Object.keys(wbData).map((id) => ({id,...wbData[id],}))} query={searchQuery} sortOption={sortOption} loading={wbLoading}/>
                )}
                {activeTab === "Subscriptions" && (
                    <AllSubscriptions subscriptions={subscriptions} query={searchQuery} sortOption={sortOption} loading={wbLoading}/>
                )} */}
                {activeTab === "Profile" && (
                    user && (
                        <Profile user={user} error={userError} loading={userIsLoading}/>
                    )
                )}
            </div>
        </div>
    );
}

export const getServerSideProps = withPageAuthRequired();
