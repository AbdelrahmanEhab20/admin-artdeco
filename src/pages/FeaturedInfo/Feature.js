import "./Feature.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Offers Average Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5000</span>
                    <span className="featuredMoneyRate">
                        -10.4 <ArrowDownwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Highest Offer</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$12,500</span>
                    <span className="featuredMoneyRate">
                         <ArrowUpwardIcon className="featuredIcon " />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Total Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$25,500</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpwardIcon className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

        </div>
    );
}