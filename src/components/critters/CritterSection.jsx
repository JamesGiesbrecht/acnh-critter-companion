import { useEffect, useState, useCallback, memo } from 'react'
import clsx from 'clsx'
import { Collapse, Paper, makeStyles, Typography, Button } from '@material-ui/core'
import { ExpandMoreRounded as ExpandMoreIcon, Search as SearchIcon } from '@material-ui/icons'
import CrittersTable from 'components/critters/CrittersTable'
import { removeItem } from 'assets/utility'
import { MainFilter, Statuses, useFilters } from 'context/Filters'

const useStyles = makeStyles(() => ({
  critters: {
    padding: '10px 0',
    margin: '20px auto',
  },
  headingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingImg: {
    width: '55px',
    marginRight: '20px',
  },
  searchIcon: {
    height: '40px',
    width: '40px',
    marginRight: '15px',
  },
  expandIconSize: {
    '& > *:first-child': {
      fontSize: 40,
    },
  },
  expandArrow: {
    transform: 'rotate(0deg)',
    transition: 'transform 0.2s linear',
  },
  open: {
    transform: 'rotate(180deg)',
    transition: 'transform 0.2s linear',
  },
}))

const CritterSection = ({ allCritters, type }) => {
  const classes = useStyles()
  const { mainFilter, status, search, donated } = useFilters()
  const isSearch = search && search.length > 0
  const [expanded, setExpanded] = useState(isSearch)
  const [randomImg] = useState(
    isSearch ? (
      <SearchIcon className={classes.searchIcon} />
    ) : (
      <img
        className={classes.headingImg}
        src={allCritters[Math.floor(Math.random() * allCritters.length)].image_path}
        alt={type}
      />
    ),
  )
  const [critters, setCritters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const filterCritters = useCallback(() => {
    let filteredCritters = []
    if (search) {
      return allCritters.filter((critter) => critter.name.toLowerCase().search(search) !== -1)
    }

    if (mainFilter === MainFilter.All) {
      // Add all critters
      filteredCritters = allCritters
    } else if (mainFilter === MainFilter.Available) {
      // add critters that are available now
      filteredCritters = allCritters.filter((critter) => critter.isAvailableNow)
    } else {
      //  Checking if any of the conditions in show are true properties on the critter
      const tempStatusFilter = removeItem([...status], Statuses.Donated)

      filteredCritters = allCritters.filter((critter) =>
        tempStatusFilter.some((condition) => critter[condition]),
      )
    }

    if (!status.includes(Statuses.Donated)) {
      // remove critters that are not donated
      filteredCritters = filteredCritters.filter((critter) => !donated.includes(critter.name))
    }

    return filteredCritters
  }, [allCritters, status, mainFilter, donated, search])

  useEffect(() => {
    setIsLoading(true)
    setCritters(filterCritters())
    setIsLoading(false)
  }, [filterCritters])

  let content
  if (isLoading) {
    content = <div className="loader" />
  } else if (critters.length === 0) {
    content = isSearch ? 'No search results' : `No ${type.toLowerCase()} to show`
  } else {
    content = <CrittersTable critters={critters} />
  }

  return (
    <Paper classes={{ root: classes.critters }} elevation={7}>
      <div className={classes.headingWrapper}>
        <div className={classes.heading}>
          {randomImg}
          <Typography variant="h4">{type}</Typography>
        </div>
        <Button
          size="small"
          classes={{ endIcon: classes.expandIconSize }}
          color="inherit"
          onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
          endIcon={
            <ExpandMoreIcon className={clsx(classes.expandArrow, !expanded && classes.open)} />
          }>
          {expanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>
      <Collapse in={Boolean(expanded)}>{content}</Collapse>
    </Paper>
  )
}

export default memo(CritterSection)
