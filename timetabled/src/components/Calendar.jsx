import React from 'react'
import Event from './Event'

const Calendar = () => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event="Fancy Dinner" location="505 Richmond Ave" color="green" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Gala Night" location="21 Maple Street" color="green" />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <Event event="Beach Party" location="102 Ocean View Drive" color="blue" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Art Exhibition" location="390 Sunset Blvd" color="pink" />
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <Event event="Music Festival" location="78 Riverbend Lane" color="blue" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Charity Auction" location="15 Cedar Court" color="green" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event="Cocktail Party" location="88 Elm Street" color="green" />
                        <td></td>
                        <Event event="Book Reading" location="12 Hilltop Road" color="pink" />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <Event event="Charity Run" location="202 Valley Road" color="blue" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Wine Tasting" location="55 Vineyard Road" color="pink" />
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <Event event="Yoga Retreat" location="89 Serene Path" color="blue" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Tech Conference" location="124 Innovation Way" color="blue" />
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default Calendar

