import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import { requestLeagueMatches } from '../../redux/leagueMatchesReducer';
import LeagueCalendar from './LeagueCalendar';

const LeagueCalendarContainer = (props) => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const leagueId = searchParams.get('leagueId') || '';

    useEffect(() => {
        props.requestLeagueMatches(leagueId);
    }, [leagueId]);

    return (
        <>
            {props.leagueMathes.isLoading
                ? <Preloader />
                : <LeagueCalendar {...props.leagueMathes} />
            }
        </>
    )
}

let mapStateToProps = (state) => ({
    leagueMathes: state.leagueMatches,
});


export default connect(mapStateToProps, {
    requestLeagueMatches,
})(LeagueCalendarContainer);