import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';

export default class Spotlights extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="wrapper">
                <div className="inner alt">
                    {_.get(this.props, 'section.spotlights') && 
                        _.map(_.get(this.props, 'section.spotlights'), (spotlight, spotlight_idx) => (
                            <section key={spotlight_idx} className="spotlight">
                                {_.get(spotlight, 'image') && 
                                    <div className="image"><img src={safePrefix(_.get(spotlight, 'image'))} alt="" /></div>
                                }
                                <div className="content">
                                    <h3>{_.get(spotlight, 'title')}</h3>
                                    {markdownify(_.get(spotlight, 'text'))}
                                </div>
                            </section>
                        ))
                    }
                    {_.get(this.props, 'section.icons') && 
                        <section className="special">
                            <ul className="icons labeled">
                                {_.map(_.get(this.props, 'section.icons'), (item, item_idx) => (
                                    <li key={item_idx}><span className={'icon ' + _.get(item, 'icon')}><span className="label">{_.get(item, 'title')}</span></span></li>
                                ))}
                            </ul>
                        </section>
                    }
                </div>
            </section>
        );
    }
}
